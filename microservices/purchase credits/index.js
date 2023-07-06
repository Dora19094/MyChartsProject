require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PUR_CREDITS_SERVER_PORT || 4500;

const purchaseCredits = require('./src/router/purchaseCredits');

app.use(cors());

app.use(bodyParser.json());

app.use((req,res)=>{
    console.log(req)
})
app.use('/credits',purchaseCredits);


app.listen(port, () => {
    console.log(`> Purchase Credits Server started on port ${port}`);
});