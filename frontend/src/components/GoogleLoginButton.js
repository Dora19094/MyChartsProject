import React from 'react';
import {GoogleLogin} from '@react-oauth/google';

const GoogleLoginButton = () => {
  const success = (response) => {
    console.log('Login success. Response:', response);
    fetch('http://localhost:4000/api/user', {
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
