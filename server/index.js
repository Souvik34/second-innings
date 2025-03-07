import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});
const app = express();
app.get('/api/example', (req, res) => {
    res.send('This is an example response from the server.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');

});
