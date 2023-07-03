const mongoose = require("mongoose");
const config = require('../configs/db.config.js');
mongoose.Promise = global.Promise;
//const dbUrl = config.name+'://'+config.host+':'+config.port +'/DisplayCharts'
const dbUrl = "mongodb+srv://mongoSaaS2023:mongoSaaS2023@cluster0.xrop4o1.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on("error", () => {
        console.log("could not connect highchartsDisplay DB");
    });
    db.once("open", () => {
        console.log(`> Successfully connected to '${dbUrl}'`);
    });
};
module.exports = { connect };