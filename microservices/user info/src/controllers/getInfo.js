const getUserInfo = require('../services/getUserInfo');

const getInfo = async (req, res) =>{
    const ID = req.user_id
    const userInfo = await getUserInfo(ID)
    if(userInfo){
        res.send(userInfo)
    } else { 
        res.status(400).send({error: "No user found"});
    }
    
}

module.exports = getInfo;