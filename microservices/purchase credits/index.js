require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PUR_CREDITS_SERVER_PORT || 4500;

const purchaseCredits = require('./src/router/purchaseCredits');

app.use(cors());

app.use(bodyParser.json());

app.use('/credits',purchaseCredits);


app.listen(port, () => {
    console.log(`> Auth Server started on port ${port}`);
});