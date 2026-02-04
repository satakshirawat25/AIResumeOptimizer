import express from 'express'

import { connectDB } from './config/db.js'
import UserRoutes from './Routes/userRoutes.js'
const app = express()
import dotenv from "dotenv";
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/user',UserRoutes)

connectDB()


const PORT=8000
app.listen(PORT,()=>{
    console.log("serer running")
})