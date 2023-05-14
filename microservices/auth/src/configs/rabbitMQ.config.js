require('dotenv').config();

const redis = {
    proto: 'amqp',
    host: '127.0.0.1',
    port: '5672 ',
}

module.exports = redis;