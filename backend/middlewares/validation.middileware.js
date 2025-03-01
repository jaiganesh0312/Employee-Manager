const { body } = require("express-validator");
const signupValidationRules = [
  body("username")
    .trim()
    .notEmpty().withMessage("Username cannot be empty")
    .isAlpha().withMessage("Username should contain only alphabetic characters")
    .isLength({ min: 3}).withMessage("Username must be atleast 3 characters"),

  body("email")
    .trim()
    .notEmpty().withMessage("Email cannot be empty")
    .isEmail().withMessage("Please enter a valid Email"),

    body("password")
    .trim()
    .notEmpty().withMessage("Password cannot be empty")
    .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
    .withMessage("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),

    body("confirmPassword")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
    
];

module.exports = { signupValidationRules };
