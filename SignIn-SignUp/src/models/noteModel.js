const mongoose = require('mongoose');

const noteModel = mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,
    },
    tags:{
        type:Array,
        required: true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        req:"User",
        required: true
    }
})

const note = mongoose.model("note", noteModel);

module.exports = note;