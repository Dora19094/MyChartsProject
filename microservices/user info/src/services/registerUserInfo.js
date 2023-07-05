const userInfo = require('../models/userInfoModel');

const registerUserInfo = (data) => {
    const {firstTimeLogin} = data
    if(firstTimeLogin){
        const newUserInfo = userInfo({
            id: data.userInfo.id,
            name: data.userInfo.name,
            email: data.userInfo.email,
            lastLogin: data.timestamp,
            numberOfCredits: 0
        });
        newUserInfo.save()
            .then(console.log(`User ${newUserInfo.name} added successfully`))
            .catch(err => console.log(err))
    } else { 
        userInfo.findOneAndUpdate({id:data.userInfo.id},{lastLogin: data.timestamp})
            .then(updatedUser => console.log(updatedUser))
            .catch(err => console.log(err))
    }
}
module.exports=registerUserInfo;