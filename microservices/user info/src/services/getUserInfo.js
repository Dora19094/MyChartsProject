const UserInfo = require("../models/userInfoModel");

//should fix return object and console logs

const getUserInfo = (id) => {
  return (
    UserInfo.findOne({ 'id': id })
    .then(userInfo => {
      return userInfo;
    })
    .catch((err) => {
      console.error(err);   
    })
  )
}

module.exports=getUserInfo;

