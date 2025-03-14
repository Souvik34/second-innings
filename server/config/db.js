import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected to the database! 🚀');
    }catch(err){
        console.error('Error connecting to the database. Exiting now...', err);
        process.exit(1);
    }
};