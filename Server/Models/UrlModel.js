const mongoose=require("mongoose");
const urlSchema= new mongoose.Schema({
    UrlId:{
      type:String,
      required:true,
      unique:true
    },
    redirectUrl:{
        type:String,
        required:true
    },
})
module.exports=new mongoose.model("urls",urlSchema)