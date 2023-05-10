const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4001;
const db = require('./src/services/mongoDbConnector.js');

db.connect();


app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`> Highcharts Server started on port ${port}`);
});