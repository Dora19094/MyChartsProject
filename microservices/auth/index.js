const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

const authRouter = require('./src/router/auth.js');
const db = require('./src/services/mongoDbConnector.js');
const redisClient = require('./src/services/redisClient.js');

db.connect();

(async () => {
    await redisClient.connect();
})();
  
console.log("Connecting to the Redis");
  
redisClient.on("ready", () => {
    console.log('> Successfully conected to Redis');
});
  
redisClient.on("error", (err) => {
    console.log("Redis: Error in the Connection");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors());

app.use(bodyParser.json());

app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`> Auth Server started on port ${port}`);
});