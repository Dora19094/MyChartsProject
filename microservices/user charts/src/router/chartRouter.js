const express = require('express');
const router = express.Router();

const chartSave = require('../controllers/chartSaveController');
const chartFetch = require('../controllers/chartFetchController');


router.post('/save',chartSave);

router.get('/fetch/:chartName',chartFetch);



module.exports = router;
