import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";
import logo from "../logo.svg";
import {Card, Col, Container, Row} from "react-bootstrap";
import "./MyCharts.css";
//import {GoogleLogout} from "react-google-login";

export function MyCharts() {

    const [charts, setCharts] = useState();
    const {state} = useLocation();
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    // const [accessToken, setAccessToken] = useState(state.accessToken);

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

    const navigate = useNavigate();
    const {credentials} = useParams();

    function handleAccount() {
        navigate(`/account/${credentials}`, {
            state: {
                accessToken: state.accessToken,
                refreshToken: state.refreshToken
            },
        });
    }

    function handleLogout() {
        //logout go to start page
        // setIsLoggedIn(false);
        // setAccessToken('');
        // localStorage.removeItem('accessToken');
        // localStorage.removeItem('expiresAt');
        navigate(`/home`);
    }

    function selectChart(){
        console.log("Chart selected");
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" style={{marginBottom: '30px'}}/>
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
                {/*<GoogleLogout*/}
                {/*    clientId='1068088482416-5ta3i9a1s4ki9d1fiilvdv8uiu16pot1.apps.googleusercontent.com'*/}
                {/*    buttonText={"Logout"}*/}
                {/*    onLogoutSuccess={handleLogout}>*/}
                {/*</GoogleLogout>*/}
            </div>
            <div className="container vertical-scrollable">
                <div className="row text-center">

                    {charts && (charts.map(chart => (
                        <div className="col-sm-8">
                            <Container>
                                <Row className="align-items-start">
                                    <Col>
                                        <Card key={chart._id} onClick={selectChart}>
                                            <Card.Body>
                                                <Card.Title>{chart.chartName}</Card.Title>
                                                <Card.Text>{chart.chartType}</Card.Text>
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