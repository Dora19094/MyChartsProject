const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const User = require("../models/userModel");
require('dotenv').config();

const  checkIfNewUser = async (req, res) => {
    const {credential} = req.body;
    const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: process.env.CLIENT_ID
    });
    const {sub, name, email} = ticket.getPayload();
    const user = {id:sub, name:name, email:email};
    User.findOne({ 'google.id': user.id })
      .then((existingUser) => {
        if (existingUser) {
          console.log(`User ${user.name} already exists`);
          res.send({newUser: false});  
        } else {
            res.send({newUser: true})
        }})
      .catch((err) => {
        res.status(500).send({error: err.message});
      });
}

module.exports = checkIfNewUser;