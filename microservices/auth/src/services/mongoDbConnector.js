const mongoose = require("mongoose");
const config = require('../configs/db.config.js');
mongoose.Promise = global.Promise;
// const dbUrl = "mongodb://127.0.0.1/user";
const dbUrl = config.name+'://'+config.host+':'+config.port+'/'+'user';
const connect = async () => {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on("error", () => {
        console.log("could not connect");
    });
    db.once("open", () => {
        console.log(`> Successfully connected to '${dbUrl}'`);
    });
};
module.exports = { connect };