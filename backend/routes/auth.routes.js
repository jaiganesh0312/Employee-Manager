const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require("../middlewares/auth.middleware");
const {signupValidationRules} = require('../middlewares/validation.middileware');
const {passwordValidateRequest} = require('../middlewares/passwordValidation.middleware')
const {validateRequest} = require("../middlewares/validateResult.middleware");

// Auth Routes
router.post('/signup', signupValidationRules ,validateRequest , authController.signup);
router.get('/verify/:token', authController.verifyEmail);
router.post('/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:token', passwordValidateRequest, validateRequest, authController.resetPassword);
router.post('/refresh-token', authController.refreshToken);
router.post('/check-token', authController.checkAuth);
router.post('/logout', authController.logout);

router.post('/protected-route', authMiddleware.authenticateToken, authController.protectedRoute);


module.exports = router;
