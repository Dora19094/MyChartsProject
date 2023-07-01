const redisClient = require('../services/redisClient');

const logout = async (req, res) => {
    try{
        const {refreshToken} = req.body;
        await redisClient.del(refreshToken);
        res.sendStatus(204);
    } catch(error){
        res.sendStatus(500).send({error: error.message});
        //ERR_HTTP_HEADERS_SENT
    }
}

module.exports = logout;
