require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const amqp = require('amqplib');
const port = process.env.PORT || 6000;

const purchaseCredits = require('./src/router/purchaseCredits');

app.use('/credits',purchaseCredits);

app.listen(port, () => {
    console.log(`> Auth Server started on port ${port}`);
});