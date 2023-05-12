const redis = require('redis');
const redisConfig = require('../configs/redis.config');

const redisClient = redis.createClient(redisConfig);

module.exports = redisClient;