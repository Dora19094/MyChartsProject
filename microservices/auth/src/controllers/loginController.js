const {OAuth2Client} = require('google-auth-library');
const addUser = require('../services/addUser');
const generateAccessToken = require('../services/generateAccessToken');
const generateRefreshToken = require('../services/generateRefreshToken');
const client = new OAuth2Client(process.env.CLIENT_ID);
const redisClient = require('../services/redisClient');
require('dotenv').config();

const  login = async (req, res) => {
    // const {credential} = req.body;
    // console.log(credential)
    // const ticket = await client.verifyIdToken({
    //     idToken: credential,
    //     audience: process.env.CLIENT_ID
    // });
    // const {sub, name, email} = ticket.getPayload();
    // const user = {id:sub, name:name, email:email};
    const user  = req.body;
    try{ 
        addUser(user);
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        //save refresh token 
        try{
            await redisClient.set(refreshToken, user.id);
            console.log({accessToken: accessToken, refreshToken: refreshToken});
            res.send({accessToken: accessToken, refreshToken: refreshToken});
        } catch(err) {
            res.status(500).send({error: err.message});
            console.log(err)
        }
        
    } catch(err){
        res.status(500).send({error: err.message});
        console.log(err)
    }
}

module.exports = login;