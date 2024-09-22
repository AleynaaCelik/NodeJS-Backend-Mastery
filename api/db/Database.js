const mongoose = require("mongoose");

let instance = null;

class Database {
    constructor() {
        if (!instance) {
            this.mongoConnection = null;
            instance = this;
        }
        return instance;
    }

    async connect(options) {  // Metod ismi düzeltildi
        try {
            console.log("Db CONNECTING...");
            let db = await mongoose.connect(options.CONNECTION_STRING);

            this.mongoConnection = db;
            console.log("Db CONNECTED!");
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    }
}

module.exports = Database;
