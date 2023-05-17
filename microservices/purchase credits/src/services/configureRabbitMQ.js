const amqp = require('amqplib');
const rabbit_config = require('../configs/rabbitmq.config');

async function configureRabbitMQ(exchangeName, queueName) {
  // Use config file
  const connection = await amqp.connect(rabbit_config.proto + "://" + rabbit_config.host);
  const channel = await connection.createChannel();
  const routingKey = ''
  // Create exchange and queue
  await channel.assertExchange(exchangeName, 'direct', { durable: false });
  await channel.assertQueue(queueName, { durable: false });
  await channel.bindQueue(queueName, exchangeName, '');
  return channel;
}

module.exports=configureRabbitMQ;