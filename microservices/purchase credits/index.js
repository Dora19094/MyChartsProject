require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PUR_CREDITS_SERVER_PORT || 6000;

const purchaseCredits = require('./src/router/purchaseCredits');
const web_config = require('./src/configs/web.config');

app.use(cors({
    origin: web_config.proto + '://' + web_config.host + ':' + web_config.port
}));

app.use(bodyParser.json());

app.use('/credits',purchaseCredits);


app.listen(port, () => {
    console.log(`> Auth Server started on port ${port}`);
});