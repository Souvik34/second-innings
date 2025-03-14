import nodemailer from "nodemailer";

export const sendVerificationEmail = async (user, verificationLink) => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Verify Your Email - Second Innings",
        html: `
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
                    .container { background-color: #ffffff; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; }
                    .btn { display: inline-block; padding: 10px 20px; color: #fff; background-color: #333; text-decoration: none; border-radius: 5px; }
                    .footer { font-size: 12px; color: #777; margin-top: 20px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>Welcome to Second Innings, ${user.name}!</h2>
                    <p>Thank you for signing up. Please verify your email to activate your account.</p>
                    <a href="${verificationLink}" class="btn">Verify Email</a>
                    <p>If you didn't request this, please ignore this email.</p>
                    <div class="footer">© 2025 Second Innings. All rights reserved.</div>
                </div>
            </body>
        </html>
        `
    };

    await transporter.sendMail(mailOptions);
};
