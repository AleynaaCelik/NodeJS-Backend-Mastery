const mongoose=require("mongoose");

const schema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    is_active:{type:Boolean,default:true},
    first_name:String,
    last_name:String,
    phone_number:String

},{
    timestamps:{
        createdAt:"created_at",
        updateAt:"update_at"
    }
    /* timestamps=true */
});

class Users extends mongoose.Models {
 
}

schema.loadClass(Users);
module.exports=mongoose.model("users",schema);