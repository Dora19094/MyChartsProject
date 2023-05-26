const express = require('express');
const router = express.Router();

const chartSave = require('../controllers/chartSaveController');
const chartFetch = require('../controllers/chartFetchController');
const countCharts = require('../controllers/countFetchController');
const authenticateToken = require('../middlewares/authenticateToken');

router.post('/save/:date',authenticateToken,chartSave);

router.get('/fetch',authenticateToken,chartFetch);

router.get('/countCharts',authenticateToken,countCharts);


module.exports = router;
