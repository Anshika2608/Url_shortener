const mongoose=require("mongoose");
import { nanoid } from 'nanoid'
import { type } from 'os';
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
module.export=new mongoose.model("urls",urlSchema)