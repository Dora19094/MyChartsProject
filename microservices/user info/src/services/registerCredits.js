const userInfo = require('../models/userInfoModel');

const registerCredits = (data) => {
    const {userId, numOfCredits} = data 
    
    userInfo.findOneAndUpdate(
        { id:userId } ,
        { $inc: { numberOfCredits: numOfCredits } }
    )
        .then()
        .catch(err => console.log(err))    
}
module.exports=registerCredits;