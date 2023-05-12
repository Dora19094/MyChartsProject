const User = require("../models/userModel");

//should fix return object and console logs

const addUser = (user) => {
    User.findOne({ 'google.id': user.id })
      .then((existingUser) => {
        if (existingUser) {
          console.log(`User ${user.name} already exists`);
          return existingUser;
        }
  
        const newUser = new User({
            google: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
        newUser.save()
          .then(() => {
            console.log(`User ${user.name} added successfully`);
            return newUser;
          })
          .catch((err) => {
            console.error('Error adding user', err);
            next(err);
          });
      })
      .catch((err) => {
        console.error('Error finding user', err);
        next(err);
      });
  }
  
  
  
  
  

module.exports = addUser;