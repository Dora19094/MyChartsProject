const amqp = require('amqplib');
const registerUserInfo = require('./registerUserInfo');


async function receiveUserInfoRabbit(queueName) {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName, { durable: false });
    channel.consume(queueName, (message) => {
        const content = message.content.toString();
        const obj = JSON.parse(content);
        registerUserInfo(obj);
        channel.ack(message);
    });
}

module.exports = receiveUserInfoRabbit;