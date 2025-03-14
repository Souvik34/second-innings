import jwt from 'jsonwebtoken';
import { asyncError } from './error.js';
import ErrorHandler from '../utils/error.js';
import User from '../models/User.js';

export const isAuthenticated = asyncError(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        throw new ErrorHandler("Unauthorized", 401);
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);

    next();
})