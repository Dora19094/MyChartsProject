const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4001;
const db = require('./src/services/mongoDbConnector.js');
const chartRouter = require('./src/router/chartRouter.js');

db.connect();


app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

app.use('/create-chart', chartRouter);

app.listen(port, () => {
    console.log(`> Highcharts Server started on port ${port}`);
});