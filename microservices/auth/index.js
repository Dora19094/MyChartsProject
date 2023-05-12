const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

const webConfig = require('./src/configs/web.config.js');
const authRouter = require('./src/router/auth.js');
const db = require('./src/services/mongoDbConnector.js');
const redisClient = require('./src/services/redisClient.js');
const redisConfig = require('./src/configs/redis.config.js');

db.connect();

(async () => {
    await redisClient.connect();
})();
  
console.log("Connecting to the Redis");
  
redisClient.on("ready", () => {
    console.log(`> Successfully connected to '${redisConfig.host}:${redisConfig.port}'`);
});
  
redisClient.on("error", (err) => {
    console.log("Error in the Connection");
});


// (async () => {
//     await redisClient.set('key', 'value');
//     const value = await redisClient.get('key');
//     console.log(value);
// })();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`> Auth Server started on port ${port}`);
});