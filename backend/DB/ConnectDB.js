const AWS= require("aws-sdk");

const region= process.env.REGION
const accessKeyId= process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey= process.env.AWS_SECRET_ACCESS_KEY;

const ConnectDB= (async ()=>{
    const res= await AWS.config.update({
        region: region,
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    })
    console.log(res);
    console.log("connected to db");
})

const db = new AWS.DynamoDB.DocumentClient()

module.exports= ConnectDB