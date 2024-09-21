const mongoose=require("mongoose");

const schema=mongoose.Schema({
    role_name:{type:String,required:true},
    is_active:{type:Boolean,defaults:true},
    cretaed_by:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    }
    

},{
    versionKey:false,
    timestamps:{
        createdAt:"created_at",
        updateAt:"update_at"
    }
    /* timestamps=true */
});

class Roles extends mongoose.Models {
 
}

schema.loadClass(Roles);
module.exports=mongoose.model("roles",schema);