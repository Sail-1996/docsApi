const mongoose=require('mongoose');
const Schema=mongoose.Schema;


module.exports=mongoose.model("Docs",Schema({
    _id:Schema.Types.ObjectId,
    phone:Number,
    landlineNo:Number,
    email:String,
    addressPer:String,
    addressLoc:String,
    user:{
       type:Schema.Types.ObjectId,
        required:true,
        ref:"User"
     
    }
}));