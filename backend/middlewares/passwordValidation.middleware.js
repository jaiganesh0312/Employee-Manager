
const {body} = require('express-validator')
const passwordValidateRequest =  [body("newPassword")
    .trim()
    .notEmpty().withMessage("Password cannot be empty")
    .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
    .withMessage("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    
]
module.exports = {passwordValidateRequest};