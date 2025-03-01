const { validationResult } = require("express-validator");

const validateRequest = (req, res, next) => {
  const error = validationResult(req);
  console.log(error.errors);
  if (error.errors.length > 0) {
    const errorDetails = {};
    error.errors.forEach(err => {
      errorDetails[err.path] = err.msg;
    });

    return res.status(403).json({ isInvalid: true, details: errorDetails });
  }
  
  next();
};

module.exports = { validateRequest };
