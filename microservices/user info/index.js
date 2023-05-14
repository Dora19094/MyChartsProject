require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const userInfoRouter = require('./src/router/userInfo.js');
const db = require('./src/services/mongoDbConnector.js');
const receiveUserInfoRabbit = require('./src/services/receiveUserInfoRabbit.js');
const receiveCreditsRabbit = require('./src/services/recieveCreditsRabbit.js');
db.connect();

//make the connection string from web config file
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

app.use('/userInfo', userInfoRouter);

receiveUserInfoRabbit('userInfoQueue');

receiveCreditsRabbit('creditsQueue');

app.listen(port, () => {
    console.log(`> User Info Server started on port ${port}`);
});