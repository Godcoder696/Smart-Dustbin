const express= require("express")

const router= express.Router();

router.get("/data",(req,res)=>{
    res.json({"name":"lakshay"})
})

module.exports= router