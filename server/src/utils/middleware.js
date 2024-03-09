const db = require("mongodb");
const mongoose = require("mongoose");

const connect = async (req, res, next) => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log('Connected to MongoDB');
        next();
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        res.status(500).send('Internal Server Error');
    }
};

const close = async (req, res, next) => {
    try {
        await mongoose.connection.close();
        console.log('Disconnected from MongoDB');
        next();
    } catch (error) {
        console.error('Error closing MongoDB connection', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    connect, 
    close
};