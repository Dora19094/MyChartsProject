const express = require('express');
const router = express.Router();

const login = require('../controllers/loginController');
const token = require('../controllers/tokenController');
const logout = require('../controllers/logoutController');
const authenticateToken = require('../controllers/authenticateToken');

router.post('/token', token);

router.post('/login', login);

router.get('/authenticateToken', authenticateToken);

router.delete('/logout', logout);

module.exports = router;

