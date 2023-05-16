const express = require('express');
const router = express.Router();

const chartCreate = require('../controllers/createChartController');
const dataValidation = require('../controllers/dataValidationController');


router.get('/create', chartCreate);

router.get('/validateData',dataValidation);



module.exports = router;
