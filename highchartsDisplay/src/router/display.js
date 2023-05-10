const express = require('express');
const router = express.Router();

const chartConfig = require('../controllers/chartConfig');


router.get('/:chartType', chartConfig);



module.exports = router;
