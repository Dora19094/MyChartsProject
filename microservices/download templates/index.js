const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4002;
const db = require('./src/services/mongoDbConnector.js');
const templatesRouter = require('./src/router/download.js');

db.connect();


app.use(cors({
    //origin: 'http://localhost:3000'
    origin:"*"
}));

app.use(bodyParser.json());

app.use('/download-templates', templatesRouter);

app.listen(port, () => {
    console.log(`> Create Chart Server started on port ${port}`);
});