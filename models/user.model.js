const mongoose=require('mongoose');
const Schema=mongoose.Schema;


module.exports=mongoose.model("User",Schema({
    _id:Schema.Types.ObjectId,
    firstName:{
        type:String,
        required:true,
      
    },
    middleName:{
        type:String,
        required:true,
      
    },
    lastName:{
        type:String,
        required:true,
      
    },
    gender:{
        type:String,
        required:true,
      
    },
    d_o_b:{
        type:String,
        required:true,
      
    },
    employeeId:{
        type:String,
        required:true,
      
    },
    maritalStatus:{
        type:String,
        required:true,
      
    },
    id_proof:{
        type:String,
        required:true,
      
    },

}));