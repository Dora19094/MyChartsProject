const jwt = require('jsonwebtoken');
const generateAccessToken = require('../services/generateAccessToken');
const redisClient = require('../services/redisClient');

const  token = async (req, res) => {
    const {refreshToken} = req.body;
    if(refreshToken ===null) return res.sendStatus(401)
    //Check if refresh token exists in token db
    try{
        const userId = await redisClient.get(refreshToken);
        console.log("User id from redis: ",userId);
        if(!userId){
            res.sendStatus(401).send({error: 'Invalid refresh token'});
        }
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if(err) return res.sendStatus(403)
            console.log("User for new Access token:\n");
            delete user.iat;
            console.log(user);
            const accessToken = generateAccessToken(user);
            res.send({accessToken:accessToken});
        })    
    
    } catch(err){
        res.sendStatus(500).json({ error: err.message });
    }
    
}

module.exports = token;