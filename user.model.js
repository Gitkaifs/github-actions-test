import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name:String,
    age:Number,
})

const userModel = mongoose.model('userModel',userSchema);

export {userModel}