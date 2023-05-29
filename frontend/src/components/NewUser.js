import React from 'react';
import {GoogleLogin} from '@react-oauth/google';
import {useLocation, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

const GoogleLoginButton = () => {
    const navigate = useNavigate();

    const success = (response) => {

        const {state} = useLocation();
        //--------------------------------------------

        // const handleContinue(){
        fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${state.accessToken}`,
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
        navigate(
            `/account/${response.credential}`,
            {
                // state: {
                //     accessToken: data.accessToken,
                //     refreshToken: data.refreshToken,
                // },
                // var accessToken = gapi.auth. getToken () .access_ token;

            });

        //--------------------------------------------
    };

    const failure = (error) => {
        console.log('Login failure. Error:', error);
    };

    function handleCancel() {
        navigate('/home');
    }

    return (

        <div>
            <h3>
                Are you sure you want to log in with google? Your data will be stored in our database and will be
                processed based on our policy.
            </h3>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    success(credentialResponse);
                }}
                onError={(error) => {
                    failure(error);
                }}
            />
            <Button variant="outline-dark" onClick={handleCancel}>
                Cancel
            </Button>
        </div>
    );
};

export default GoogleLoginButton;
