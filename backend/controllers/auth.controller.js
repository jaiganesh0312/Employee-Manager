const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const crypto = require("crypto");

const {
  sendVerificationEmail,
  sendPasswordResetToken,
} = require("../util/mailer");

// User Signup with Email Verification
exports.signup = async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      verificationToken,
      verified: false,
    });

    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({
      message:
        "User registered successfully. Check your email for verification.",
    });
  } catch (error) {
    console.log(error);
    if (error?.errors?.length > 0) {
      const details = {};
      error.errors.forEach((curr) => {
        details[curr.path] = curr.message;
      });
      res.status(403).json({ isInvalid: true, details });
    } else res.status(500).json({ error: error.message });
  }
};

// Email Verification
exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const user = await User.findOne({ where: { verificationToken: token } });

    if (!user) return res.status(400).json({ error: "Invalid token" });

    user.verified = true;
    user.verificationToken = null;
    await user.save();

    res.json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user)
      return res
        .status(404)
        .json({ isInvalid: true, details: { email: "User not found!" } });

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = resetToken;
    await user.save();

    await sendPasswordResetToken(email, resetToken);
    res.json({ message: "Password reset email sent" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;
    const user = await User.findOne({ where: { resetToken: token } });
    if (!user)
      return res.status(400).json({
        isInvalid: true,
        details: {
          newPassword: "Password Reset Link is Invalid or Expired!!",
        },
      });

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetToken = null;
    await user.save();

    res.json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const generateAccessToken = (user) =>
  jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });

const generateRefreshToken = (user) =>
  jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

exports.login = async (req, res) => {
  console.log("Login request", req.body);
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user)
      return res
        .status(404)
        .json({ isInvalid: true, details: { email: "User not found!" } });
    if (!user.verified)
      return res
        .status(403)
        .json({ isInvalid: true, details: { email: "User not verified!" } });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(403).json({
        isInvalid: true,
        details: { password: "Invalid Credentials" },
      });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Store refresh token in database
    user.refreshToken = refreshToken;

    await user.save();

    // Set HTTP-only cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    console.log("Login successful");

    res.json({ message: "Login successful" });
  } catch (error) {
    console.log("My error", error);
    res.status(500).json({ error: error.message });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) return res.status(401).json({ message: "Unauthorized" });

    const { id } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findByPk(id);

    if (!user || user.refreshToken !== refreshToken)
      return res.status(401).json({ message: "Unauthorized" });

    const accessToken = generateAccessToken(user);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    res.json({ message: "Token refreshed" });
  } catch (error) {
    console.log("Refresh Token Error", error);
    res.status(500).json({ message: error.message });
  }
};

exports.logout = async (req, res) => {
  const { refreshToken } = req.cookies;
  if(refreshToken){
    const user = await User.findOne({ where: { refreshToken } });
    user.refreshToken = null;
    await user.save();
  }
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.json({ message: "Logged out successfully" });
};

exports.checkAuth = (req, res) => {
  try {
    const { accessToken: token } = req.cookies; // Assuming JWT is stored in HTTP-only cookies
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    // Verify JWT
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
      }
      return res.json({ authenticated: true, user: decoded });
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.protectedRoute = (req, res) => {
  console.log("Inside protected route");
  res.status(200).json({
    message: "Welcome to protected route brother!!",
  });
};
