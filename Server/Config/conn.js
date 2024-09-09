const mongoose=require('mongoose')
require('dotenv').config();
const connectionString=process.env.CONNECTION_STRING
mongoose.connect(connectionString,{
    serverSelectionTimeoutMS: 10000,
})
.then(()=>{
    console.log("connected to mongoDB database")
})
.catch((err)=>{
    console.error("Error in connecting to  mongoDB database:",err)
})