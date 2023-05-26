const express = require('express');
const router = express.Router();

const chartSave = require('../controllers/chartSaveController');
const chartFetch = require('../controllers/chartFetchController');
const countCharts = require('../controllers/countFetchController');

router.post('/save/:date',chartSave);

router.get('/fetch',chartFetch);

router.get('/countCharts',countCharts);


module.exports = router;
