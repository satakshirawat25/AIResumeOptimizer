require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db.js");
const app = express();
// const PORT = 4000;


app.use(express.json()); // 👈 THIS IS REQUIRED
app.use(express.urlencoded({ extended: true }));


//routes
const UserRoutes = require("./Routes/userRoutes");
const ResumeRoutes = require("./Routes/resumeRoutes");

app.use("/api/user", UserRoutes);
app.use("/api/resume", ResumeRoutes);
connectDB();

const PORT = 8000;
app.listen(PORT, () => {
  console.log("server running");
});
