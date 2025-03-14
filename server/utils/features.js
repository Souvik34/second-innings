export const cookieOptions = {
    secure: process.env.NODE_ENV === "Development" ? false : true,
    httpOnly: process.env.NODE_ENV === "Development" ? false : true,
    sameSite: process.env.NODE_ENV === "Development" ? false : "none",
};

export const sendToken = (user, res, message, statusCode) => {
    const token = user.generateToken();
    res
        .status(statusCode)
        .cookie("googletoken", token, {
            ...cookieOptions,
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        })
        .json({
            success: true,
            message,
            user: user,
        });
};