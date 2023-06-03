import React, {useEffect, useState} from 'react';
import {GoogleLogin} from '@react-oauth/google';
import {useLocation, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

const GoogleLoginButton = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState('');


    useEffect(() => {
        // Check if access token exists in local storage
        const storedAccessToken = localStorage.getItem('accessToken');
        if (storedAccessToken) {
            setAccessToken(storedAccessToken);
            setIsLoggedIn(true);
        }
    }, []);

    const success = (response) => {

        //--------------------------------------------
        const success = (googleResponse) => {

            fetch('http://localhost:4000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(googleResponse)
            })
                .then(loginResponse => loginResponse.text())
                .then(loginData => {
                    console.log("Old user logged in")
                    console.log(loginData);
                    const logindata = JSON.parse(loginData);
                    console.log(logindata);

                    // store access token in local storage
                    const {accessToken} = googleResponse.accessToken;
                    setAccessToken(accessToken);
                    setIsLoggedIn(true);
                    localStorage.setItem('accessToken', accessToken);

                    // navigate to user account page, account.js
                    navigate(
                        `/account/${googleResponse.credential}`,
                        {
                            state: {
                                accessToken: logindata.accessToken,
                                refreshToken: logindata.refreshToken,
                            },
                        });
                })
                .catch(error => {
                    console.error(error);
                });

            //--------------------------------------------
        };
    }
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
