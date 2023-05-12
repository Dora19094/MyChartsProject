const express = require('express');
const router = express.Router();

const templatesController = require('../controllers/templatesController');


router.get('/fetchTemplate/:templateType', templatesController());



module.exports = router;
