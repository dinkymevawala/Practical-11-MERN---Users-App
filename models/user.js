const mongoose= require("mongoose");

//User Schema
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    age: Number,
});

const userModel = mongoose.model("login",userSchema,"login");

module.exports=userModel;