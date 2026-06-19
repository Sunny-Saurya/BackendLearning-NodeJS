const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default : "user"
    }
    
})

const user = mongoose.model("user", userModel);

module.exports = user;