// SDK's and packages
const AWS= require("aws-sdk")
const express= require("express")

// Router obj
const router= express.Router();

// details from env
const region= process.env.REGION;
const accessKey= process.env.AWS_ACCESS_KEY_ID;
const secret= process.env.AWS_SECRET_ACCESS_KEY;

// dynamoDB connection
let dynamoDB= new AWS.DynamoDB.DocumentClient({
    region: "eu-north-1",
    accessKeyId: accessKey,
    secretAccessKey: secret
})

// data getting route
router.get("/data",async (req,res)=>{

    // table parameters
    let params={
        TableName:"DustbinData"
    }

    // fetching data
    dynamoDB.scan(params,function(err,data){
        if(err){
            console.log("Error Occurred!",err);
            res.status(400);
            res.json({"errorMessage":err.message})
        }
        else{
            res.status(200);
            res.json(data.Items);
        }
    })
})

// route for user login & verification
router.post("/login",async()=>{
  try {
    
  } catch (error) {
    
  }  
})


module.exports= router