import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user'
    },
    photoUrl:{
        type:String,  required:true
    },
},{timestamps:true})

export const user = mongoose.model("user",userSchema)