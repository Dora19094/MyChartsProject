import React from 'react';
import {GoogleLogin} from '@react-oauth/google';
import {useNavigate} from "react-router-dom";

const GoogleLoginButton = () => {
    const navigate = useNavigate();

    const success = (response) => {


        //--------------------------------------------

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


        if (response.newUser === true) {

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
            navigate(
                `/account/${response.credential}`,
                {
                    // state: {
                    //     accessToken: data.accessToken,
                    //     refreshToken: data.refreshToken,
                    // },
                    // var accessToken = gapi.auth. getToken () .access_ token;

                });
        } else {
            navigate(
                `/account/${response.newUser}/false`,
                {
                    // state: {
                    //     accessToken: data.accessToken,
                    //     refreshToken: data.refreshToken,
                    // },
                    // var accessToken = gapi.auth. getToken () .access_ token;

                });
        }
        //--------------------------------------------


        //     console.log('Login success. Response:', response);
        //     fetch('http://localhost:4000/auth/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(response)
        //     })
        //         .then(response => response.text())
        //         .then(data => {
        //             console.log(data);
        //         })
        //         .catch(error => {
        //             console.error(error);
        //         });
        //     navigate(
        //         `/account/${response.credential}`,
        //         {
        //             // state: {
        //             //     accessToken: data.accessToken,
        //             //     refreshToken: data.refreshToken,
        //             // },
        //             // var accessToken = gapi.auth. getToken () .access_ token;
        //
        //         });
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
