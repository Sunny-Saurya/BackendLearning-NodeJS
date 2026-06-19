const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Is Up And Running !!");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;