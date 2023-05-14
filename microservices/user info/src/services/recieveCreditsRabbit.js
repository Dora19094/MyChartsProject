const amqp = require('amqplib');
const registerCredits = require('./registerCredits');


async function receiveCreditsRabbit(queueName) {
    const connection = await amqp.connect('amqp://localhost');
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