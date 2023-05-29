import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";
import logo from "../logo.svg";
import {Card, Col, Container, Row} from "react-bootstrap";
// import {charts} from "./data";
import "./MyCharts.css";
import {GoogleLogout} from "react-google-login";

export function MyCharts() {

    const [charts, setCharts] = useState();
    const {state} = useLocation();

    useEffect(() => {
        fetch('http://localhost:4003/user-chart/fetch', {
            method: 'GET',
            //credentials: "include",
            headers: {
                'Authorization': `Bearer ${state.accessToken}`,
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCharts(data);
            })
    }, []);
    // useEffect(() => {
    //     const url = `http://localhost:4003/user-chart/fetch`;
    //     const fetchData = async () => {
    //         await fetch(url)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data);
    //                 setCharts(data)
    //             });
    //     };
    //
    //     fetchData();
    //     console.log(charts);
    // }, []);


    const navigate = useNavigate();
    const {credentials} = useParams();

    function handleAccount() {
        //navigate account/${credentials}
        navigate(`/account/${credentials}`, {state: {credentials: credentials}});
    }

    function handleLogout() {
        //logout go to start page
        navigate(`/home`);
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="d-flex justify-content-md-start">
                <h3 className="me-2">
                    (email)@gmail.com
                </h3>
                <Button className="me-2" variant="outline-info" onClick={handleAccount}>
                    my account
                </Button>
                <Button className="me-2" variant="outline-dark" onClick={handleLogout}>
                    logout
                </Button>
                <GoogleLogout
                    clientId='1068088482416-5ta3i9a1s4ki9d1fiilvdv8uiu16pot1.apps.googleusercontent.com'
                    buttonText={"Logout"}
                    onLogoutSuccess={handleLogout}>
                </GoogleLogout>
            </div>
            <div className="container vertical-scrollable">
                <div className="row text-center">

                    {charts && (charts.map(chart => (
                        <div className="col-sm-8">
                            <Container>
                                <Row className="align-items-start">
                                    <Col>
                                        <Card key={chart._id}>
                                            <Card.Body>
                                                <Card.Title>{chart.files.chartName}</Card.Title>
                                                <Card.Text>{chart.files.chartType}</Card.Text>
                                                <Card.Text>  {chart.createdOn}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )))}
                </div>
            </div>
        </div>
    )
}