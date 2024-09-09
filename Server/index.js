const express=require('express')
const cors =require('cors')
const app=express();
require("./Config/conn")
const port=process.env.PORT||3000
app.use(express.json());
app.use(cors());
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})