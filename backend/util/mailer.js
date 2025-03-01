const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendVerificationEmail = async (email, token) => {
    const verificationLink = `http://localhost:5000/auth/verify/${token}`;
    console.log("SendVerificationEmail:", email, token);
    const mailOptions = {
        from: '"donoreply" <jgtumkar@gmail.com>',
        to: email,
        subject: 'Verify Your Email ✔',
        html: `
            <h2>Welcome to Employee Manager</h2>
            <p>Please verify your email by clicking the link below:</p>
            <a href="${verificationLink}" 
               style="display: inline-block; padding: 10px 20px; color: white; background-color: blue; text-decoration: none; border-radius: 5px;">
               Verify Email
            </a>
            <p>If you did not request this, please ignore this email.</p>
            <p>Best Regards,<br>YourApp Team</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Verification email sent to', email);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

const sendPasswordResetToken = async (email, resetToken) => {
    const resetLink = `http://localhost:3000/auth/reset-password?token=${resetToken}`; //frontend link bhejna hai
    console.log("SendPasswordResetToken:", email, resetToken);
    const mailOptions = {
        from: '"donoreply" <jgtumkar@gmail.com>',
        to: email,
        subject: 'Reset Your Password',
        html: `
            <h2>Welcome to Employee Manager!</h2>
            <p>Please reset your password by clicking the link below:</p>
            <a href="${resetLink}" 
               style="display: inline-block; padding: 10px 20px; color: white; background-color: blue; text-decoration: none; border-radius: 5px;">
               Reset Password
            </a>
            <p>If you did not request this, please ignore this email.</p>
            <p>Best Regards,<br>YourApp Team</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Verification email sent to', email);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = {sendVerificationEmail, sendPasswordResetToken};
