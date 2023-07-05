const getUserInfo = require('../services/getUserInfo');

const getInfo = async (req, res) =>{
    const ID = req.user_id
    console.log("User ID FROM TOKEN: ",ID);
    const userInfo = await getUserInfo(ID)
    console.log(userInfo);
    if(userInfo){
        res.send(userInfo)
    } else { 
        res.status(400).send({error: "No user found"});
    }
    
}

module.exports = getInfo;