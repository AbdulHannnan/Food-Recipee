const mongoose = require("mongoose");

const connectDB = async() => {
        await mongoose.connect("mongodb://localhost:27017/FoodRecipie")
        .then(() => console.log("DB is connected"))
}

module.exports = connectDB;