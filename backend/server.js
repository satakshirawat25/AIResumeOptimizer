import express from 'express'
import { connect } from 'mongoose'
import { connectDB } from './config/db.js'
const app = express()
import dotenv from "dotenv";
dotenv.config();


connectDB()
const port=8000
app.listen(port,()=>{
    console.log("serer running")
})