import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";
import logo from "../logo.svg";
import {ButtonGroup, ButtonToolbar} from "react-bootstrap";
import "./Account.css";
import "./GoogleLoginButton.js"
// url here needs accountID email
export default function BuyCredits() {
    const navigate = useNavigate();
    const {credentials} = useParams();
    const {state} = useLocation();

    async function postCredits(credits){
        if (credits !== 0) {
            const requestOptions = {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${state.accessToken}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                // body: JSON.stringify(credits),
            };
            const url = `http://localhost:4500/credits/purchaseCredits/${credits}`
            await fetch(url, requestOptions)
                .then((res) => {console.log(res)})
                .catch(err => console.log(err));
            console.log(credits);
        }
    }
    async function handle5() {
        console.log("bought 5 credits!");
        //setCredits(5);
        await postCredits(5);
    }

    async function handle10() {
        console.log("bought 10 credits!");
        //setCredits(10);
        await postCredits(10);
    }

    async function handle15() {
        console.log("bought 15 credits!");
        //setCredits(15);
        await postCredits(15);
    }

    async function handle20() {
        console.log("bought 20 credits!");
        //setCredits(20);
        await postCredits(20);
    }

    function handleClick() {
        //navigate to previous page
        navigate(`/account/${credentials}`, {
            state: {
                accessToken: state.accessToken,
                refreshToken: state.refreshToken
            },
        });
    }


    // const [nocharts, setNoCharts] = useState();

    // useEffect(() => {
    //     fetch('http://localhost:6000/user-chart/countCharts', {
    //         method: 'GET',
    //         //credentials: "include",
    //         headers: {
    //             'Authorization': `Bearer ${state.accessToken}`,
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setNoCharts(data);
    //         })
    // }, []);
//-------------
    //useEffect(() => {
        //now
        //if (credits) {
            //     const requestOptions = {
            //         method: "POST",
            //         headers: {
            //             'Authorization': `Bearer ${state.accessToken}`,
            //             "Content-Type": "application/json"
            //         },
            //         body: JSON.stringify(credits),
            //     };
            //     const url = `http://localhost:6000/credits/purchaseCredits/${credits}`
            //     await
            //         fetch(url, requestOptions).then(
            //         );
            //     console.log(credits);
            //
            //     fetch(`http://localhost:6000/credits/purchaseCredits/${credits}`, {
            //         method: 'POST',
            //         headers: {
            //             'Authorization': `Bearer ${state.accessToken}`,
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify(credits)
            //     })
            //         .then(response => response.json())
            //         .then(data => console.log(data));
            // }


//------------------


       // }


//----------------


// -------------------
   // }, [credits]);


    // useEffect(() => {
    //     if (credits.length > 0) {
    //         fetch(`http://localhost:6000/credits/purchaseCredits/${credits[0]}`, {
    //             method: "POST",
    //             headers: {
    //
    //                 Authorization: `Bearer ${state.accessToken}`,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(credits),
    //         })
    //             .then((response) => response.json())
    //             .then((data) => setCredits(data))
    //             .catch((error) => {
    //                 console.error("Error purchasing credits:", error);
    //                 setCredits([]); // Reset credits on error
    //             });
    //     }
    // }, [credits, state.accessToken]);


    return (
        <div>
            <img src={logo} className="template-logo" alt="logo"/>
            <div className="justify-content-start">
                <h3 className='mt-5'> you're logged in as </h3>
                <div className='mt-5'>
                    <ButtonToolbar>
                        <ButtonGroup className="me-2">
                            <Button variant="outline-info" style={{height: 200, width: 150}} onClick={handle5}>
                                5 credits
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2">
                            <Button variant="outline-info" style={{height: 200, width: 150}} onClick={handle10}>
                                10 credits
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2">
                            <Button variant="outline-info" style={{height: 200, width: 150}} onClick={handle15}>
                                15 credits
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2">
                            <Button variant="outline-info" style={{height: 200, width: 150}} onClick={handle20}>
                                20 credits
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <Button className="mt-5" variant="outline-dark" onClick={handleClick}>
                        cancel purchase
                    </Button>
                </div>
            </div>
        </div>
    );
}
