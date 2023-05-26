import React, {useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";
import logo from "../logo.svg";
import {ButtonGroup, ButtonToolbar, Card, Carousel, CarouselItem, Col, Modal, Row, Stack} from "react-bootstrap";
import "./Account.css";
import {useNavigate} from "react-router-dom";
import "./GoogleLoginButton";

export default function Account() {

    const {state} = useLocation();
//fetch account ID, user's email, no of charts & credits, date of last login

    const navigate = useNavigate();
    const {credentials} = useParams();
    const [account, setAccount] = useState();

    // useEffect(() => {
    //     const url = `https://localhost:5000//userInfo/getInfo`;
    //     const fetchData = async () => {
    //         await fetch(url)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data);
    //                 setAccount(data)
    //             });
    //     };
    //
    //     fetchData();
    //     if (account) {
    //         console.log(account);
    //     }
    // }, []);
    useEffect(() => {
        fetch('https://localhost:5000//userInfo/getInfo', {
            method: 'GET',
            credentials: "include",
            headers: {
                'Authorization': state.accessToken,
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }, []);


    // console.log(state.accessToken, state.refreshToken);


    const [nocharts, setNoCharts] = useState();

    // useEffect(() => {
    //     const url = `http://localhost:4003/user-chart/countCharts`;
    //     const fetchData = async () => {
    //         await fetch(url)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data);
    //                 setNoCharts(data)
    //             });
    //     };

    //     fetchData();
    //     console.log(nocharts);
    // }, []);


    function handleMyCharts() {
        console.log("my charts");
        navigate(`/account/${credentials}/mycharts`, {
            state: {
                credentials: credentials,
            },
        });
    }

    function handleNewChart() {
        console.log("new chart");
        navigate(`/account/${credentials}/newchart`, {
            state: {
                credentials: credentials,
            },
        });
    }

    function handleBuyCredits() {
        console.log("buy credits");
        navigate(`/account/${credentials}/buy`, {
            state: {
                credentials: credentials,
            },
        });
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="justify-content-start">

                <Col>
                    <div className='mt-5'>
                        <Row>
                            <h3>
                                hello {/* google account goes here:  account.email*/}
                            </h3>
                        </Row>
                    </div>
                    <div className='mt-5'>
                        <Row>
                            <h6>
                                n. of charts {/* no of charts: account.noCharts */}
                                {nocharts && (nocharts.count)}
                            </h6>
                        </Row>
                    </div>
                    <div className='mt-3'>
                        <Row>
                            <h6>
                                available credits {/* user's credits: account.credits */}
                            </h6>
                        </Row>
                    </div>
                    <div className='mt-3'>
                        <Row>
                            <h6>
                                last login {/* last date of log in: account.dateLogin */}
                            </h6>
                        </Row>
                    </div>
                </Col>
            </div>
            <div className='mt-5'>
                <ButtonToolbar>
                    <ButtonGroup className="me-2">
                        <Button variant="outline-info" onClick={handleMyCharts}>
                            my charts
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2">
                        <Button variant="outline-info" onClick={handleNewChart}>
                            new chart
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2">
                        <Button variant="outline-info" onClick={handleBuyCredits}>
                            buy credits
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        </div>
    );
}
