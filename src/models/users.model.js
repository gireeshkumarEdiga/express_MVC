const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname : {type:String,required:true},
    lastname : {type:String, required:true},
    gender : {type:String, required: true},
    dob : {type:Number,required:true},
},{
    versionKey : false,
    timestamps:true,
})

module.exports = mongoose.model("user",userSchema);