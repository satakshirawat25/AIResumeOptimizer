import mongoose from "mongoose";

export const ResumeSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    resume_name:{
        type:String,
        required:true
    },
    job_desc:{
        type:String,
        required:true
    },
    score:{
        type:String
    },
    feedback:{
        type:String,
    }
},{timestamps:true})

export const resume = mongoose.model("resume",ResumeSchema)