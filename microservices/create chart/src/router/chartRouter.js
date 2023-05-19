const express = require('express');
const router = express.Router();

const chartCreate = require('../controllers/createChartController');


router.post('/create',chartCreate);


module.exports = router;
