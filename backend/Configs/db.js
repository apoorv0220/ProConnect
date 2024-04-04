const mongoose = require('mongoose');
require('dotenv').config();
const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_URL);
        console.log(`Server Started at PORT ${process.env.port}`);
    } catch (error) {
        console.log("Error while connecting to db", error);
    }
}

module.exports = Connection;