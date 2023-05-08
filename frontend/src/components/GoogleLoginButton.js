import React from 'react';
import {GoogleLogin} from '@react-oauth/google';


const GoogleLoginButton = () => {

  

// const getDecodedOAuthJwtGoogle = async token => {

//   const CLIENT_ID_GOOGLE = '1068088482416-5ta3i9a1s4ki9d1fiilvdv8uiu16pot1.apps.googleusercontent.com'

//   try {
//     const client = new OAuth2Client(CLIENT_ID_GOOGLE)

//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: CLIENT_ID_GOOGLE,
//     })

//     return ticket
//   } catch (error) {
//     return { status: 500, data: error }
//   }
// }



  const success = (response) => {
    console.log('Login success. Response:', response);
    fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(response)
        })
        .then(response => response.text())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
  };

  const failure = (error) => {
    console.log('Login failure. Error:', error);
  };

  return (
    <GoogleLogin
        onSuccess={credentialResponse => {
            success(credentialResponse);
        }}
        onError={(error) => {
            failure(error);
        }}
    />
  );
};

export default GoogleLoginButton;
