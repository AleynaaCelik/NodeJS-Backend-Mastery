const mongoose=require("mongoose");

let instance=null;
class Database{

    constructor(){
        if(!instance){
            this.mongoConnection=null;
            instance=this;
        }
        return instance;
    }
    async conect(options){
        let db=await mongoose.connect(options.CONNECTION_STRING);

        this.mongoConnection=db;
    }
}

module.exports=Database;