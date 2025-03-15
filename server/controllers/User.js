import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { sendToken } from "../utils/features.js";
import { asyncError } from "../middlewares/error.js";
import ErrorHandler from "../utils/error.js";
import { v2 } from "cloudinary";
import { getBase64 } from "../lib/helper.js";
import { sendVerificationEmail } from "../utils/sendMail.js";

export const signup = asyncError(async (req, res, next) => {
    const { name, email, password, role, phone, location } = req.body;

    if (!name || !email || !password || !role) {
        return next(new ErrorHandler("Please fill in all fields", 400));
    }

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
        return next(new ErrorHandler("User already exists", 400));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let profileImage = null;
    if (req.file) {
        const file = req.file;

        const uploadResult = await v2.uploader.upload(getBase64(file), {
            folder: "profile_pic",
        });

        profileImage = {
            public_id: uploadResult.public_id,
            url: uploadResult.secure_url,
        }
    }

    const verifyToken = bcrypt.hashSync(email, 10).replace(/\//g, "");
    const verifyExpire = Date.now() + 10 * 60 * 1000;

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
        phone,
        location,
        profileImage,
        verifyToken,
        verifyExpire,
    })

    const verificationLink = `${process.env.SERVER_URL}/api/auth/verify-email/${verifyToken}`;

    await sendVerificationEmail(user, verificationLink);

    sendToken(user, res, `Welcome ${user.name},Please check your email for verification.`, 201);
})

export const login = asyncError(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please fill in all fields", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid credentials", 401));
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        return next(new ErrorHandler("Invalid credentials", 401));
    }

    sendToken(user, res, `Welcome back ${user.name}`, 200);
})

export const verifyEmail = asyncError(async (req, res, next) => {
    const { verifyToken } = req.params;

    const user = await User.findOne({ verifyToken });

    if (!user) {
        return res.redirect(`${process.env.CLIENT_URL}/email-verification?status=error&message=Invalid token`);
    }

    if (user.verifyExpire < Date.now()) {
        return res.redirect(`${process.env.CLIENT_URL}/email-verification?status=error&message=Token expired`);
    }

    user.isVerified = true;
    user.verifyToken = null;
    user.verifyExpire = null;

    await user.save();

    res.redirect(`${process.env.CLIENT_URL}/email-verification?status=success&message=Email verified successfully`);
})

export const getProfile = asyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    return res.status(200).json({
        success: true,
        user
    })
})