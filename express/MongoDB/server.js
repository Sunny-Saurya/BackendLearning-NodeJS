import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import db from './db/db.js';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from MongoDB server!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});