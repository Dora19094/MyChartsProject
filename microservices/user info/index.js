require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.USER_INFO_PORT || 5000;

const userInfoRouter = require('./src/router/userInfo.js');
const db = require('./src/services/mongoDbConnector.js');
const receiveUserInfoRabbit = require('./src/services/receiveUserInfoRabbit.js');
const receiveCreditsRabbit = require('./src/services/recieveCreditsRabbit.js');

db.connect();

app.options('*', cors())
app.use(cors());
app.use(bodyParser.json());

app.use('/userInfo', userInfoRouter);

receiveUserInfoRabbit('userInfoQueue');

receiveCreditsRabbit('creditsQueue');

app.listen(4004, () => {
    console.log(`> User Info Server started on port ${port}`);
});