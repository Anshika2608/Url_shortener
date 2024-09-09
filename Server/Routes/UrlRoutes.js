const submitUrl = require("../Controller/UrlController");

const express=require(express);
const router=express.router();
router.post("/submitUrl",submitUrl);
module.exports=router;