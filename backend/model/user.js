const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{
        type : String,
        require : true,
        unique : true
    },
    password:{
        type: String,
        require: true
    }
},{Timestamp: true})

module.exports= mongoose.model("Users" , userSchema);