const express = require("express");
const dotenv= require("dotenv");
const cors= require("cors");
const RoutesHandler= require("./routes/RoutesHandler")
const app= express();

// initializing dotenv
dotenv.config()

// use cors
app.use(cors());

// use JSON format
app.use(express.json());

// get PORT
const port= process.env.PORT;

// app listening on the port
app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})

// manage Routes
app.use("/",RoutesHandler)