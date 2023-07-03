import {GoogleLogin} from '@react-oauth/google';
import {useNavigate} from "react-router-dom";
import "../pages/Account.js";

const GoogleLoginButton = () => {
    const navigate = useNavigate();
    const success = (googleResponse) => {

        //check if the user is new by asking the backend server
        fetch('http://localhost:4000/auth/checkIfNewUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(googleResponse)
        })
            .then(newUserResponse => newUserResponse.text())
            .then(newUserResponse => {
                let newUserResponseJSobj = JSON.parse(newUserResponse)
                if (newUserResponseJSobj.newUser === false) {
                    //Old user
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

                            // navigate to Account page
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

                } else {
                    //New user
                    console.log("New user");
                    //go to New User page
                    navigate(
                         `/account/newuser`, {
                        state :{
                            googleRes: googleResponse}
                        });
                }
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
