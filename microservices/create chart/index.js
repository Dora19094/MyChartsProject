const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4001;
const db = require('./src/services/mongoDbConnector.js');
const chartRouter = require('./src/router/chartRouter.js');


// Increase the payload size limit
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

db.connect();


app.use(cors({
    //origin: 'http://localhost:3000'
    origin : "*"
}));

app.use(bodyParser.json());

app.use('/create-chart', chartRouter);

app.listen(port, () => {
    console.log(`> Create Chart Server started on port ${port}`);
});