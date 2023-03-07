require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user")
// express app
const app = express();

// middlewares
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
})
// routes
app.use("/api/workouts",workoutRoutes)
app.use("/api/user",userRoutes)

// connect to mongoose
mongoose.connect(process.env.MONG_URL)
    .then(()=>{
        // listen for requests
        app.listen(4000,()=>{
            console.log("connected to db,server is up and running in port",process.env.PORT)
        })
    })
    .catch((err)=>{
        console.log(err);
    })

 