const mongoose = require('mongoose');
exports.connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected")
    }catch(err){
        console.log(err)
    }
}