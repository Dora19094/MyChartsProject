require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PUR_CREDITS_SERVER_PORT || 4500;

const purchaseCredits = require('./src/router/purchaseCredits');

app.options('*', cors())
app.use(cors());

app.use(bodyParser.json());


app.use('/credits',purchaseCredits);


app.listen(4500, () => {
    console.log(`> Purchase Credits Server started on port ${port}`);
});