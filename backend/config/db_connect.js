const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log("database is connected !");

    } catch (err) {
        console.log("connecting to database failed :(", err);
    }
};

module.exports = connectDB;