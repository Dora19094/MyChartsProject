const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4003;
const db = require('./src/services/mongoDbConnector.js');
const chartRouter = require('./src/router/chartRouter.js');
const webConfig = require('./src/configs/web.config.js');

// Increase the payload size limit
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

db.connect();


app.use(cors({
    // origin: webConfig.proto+"://"+webConfig.host+":"+webConfig.port
    origin: "*"
}));

app.use(bodyParser.json());

app.use('/user-chart', chartRouter);

app.listen(port, () => {
    console.log(`> Users' Charts Server started on port ${port}`);
});