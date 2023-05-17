const amqp = require('amqplib');

const registerCredits = require('./registerCredits');
const rabbit_config = require('../configs/rabbitmq.config');

async function receiveCreditsRabbit(queueName) {
    const connection = await amqp.connect(rabbit_config.proto + '://' + rabbit_config.host);
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName, { durable: false });
    channel.consume(queueName, (message) => {
        const content = message.content.toString();
        const obj = JSON.parse(content);
        registerCredits(obj);
        channel.ack(message);
    });
}

module.exports = receiveCreditsRabbit;