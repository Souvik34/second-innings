import express from 'express';
import {
    signup,
    login,
    getProfile,
    verifyEmail
} from '../controllers/User.js'
import { isAuthenticated } from '../middlewares/auth.js';
import { profileUpload } from '../middlewares/upload.js';

const router = express.Router();

router.post('/signup', profileUpload, signup);
router.post('/login', login);
router.get('/user', isAuthenticated, getProfile);
router.get('/verify-email/:verifyToken', verifyEmail);

export default router;