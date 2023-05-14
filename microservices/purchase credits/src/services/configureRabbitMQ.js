const amqp = require('amqplib');

async function configureRabbitMQ(exchangeName, queueName) {
  // Use config file
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const routingKey = ''
  // Create exchange and queue
  await channel.assertExchange(exchangeName, 'direct', { durable: false });
  await channel.assertQueue(queueName, { durable: false });
  await channel.bindQueue(queueName, exchangeName, '');

  // Return channel to use for sending and receiving messages
  return channel;
}

module.exports=configureRabbitMQ;