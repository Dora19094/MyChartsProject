sendMessageRabbitMQ = require('./sendMessageRabbitMQ');

const sendUserInfoRabbit = (firstTimeLogin, data) => {
    let message = {};
    if(firstTimeLogin){
        const {google} = data;
        message = {firstTimeLogin:true, userInfo: google, timestamp: Date.now()};
        
    } else{
        
        const {google} = data 
        message = {firstTimeLogin:false, userInfo: google, timestamp: Date.now()};
    }
    sendMessageRabbitMQ(message, 'userInfoQueue', 'userInfoExchange');
}

module.exports=sendUserInfoRabbit;