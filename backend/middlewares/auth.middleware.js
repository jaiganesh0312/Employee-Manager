const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    console.log('Inside middleware', token);

    if (!token) return res.status(403).json({ message: "Access denied. No token provided." });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: "Invalid or expired token" });
        req.user = user; // Attach user info to request
        next();
    });
};

