import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser';

import { connectDB } from './config/db.js';
import { errorMiddleware } from './middlewares/error.js';
import { connectToCloudinary } from './config/cloudinary.js';
import authRouter from './routes/User.js'

dotenv.config();
const app = express();

// Connect to the database
connectDB();

// handle cors policy
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to Cloudinary
connectToCloudinary();

app.get('/api/example', (req, res) => {
    res.send('This is an example response from the server.');
});


// auth routes
app.use('/api/auth', authRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

// Error middleware
app.use(errorMiddleware);