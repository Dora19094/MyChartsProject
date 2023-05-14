const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');
const purchaseCredits = require('../controllers/purchaseCredits.js');

router.post('/purchaseCredits/:numOfCredits', authenticateToken, purchaseCredits);

module.exports=router;