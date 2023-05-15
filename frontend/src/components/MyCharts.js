import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";
import logo from "../logo.svg";
import {Card, Col, Container, Row} from "react-bootstrap";
import {charts} from "./data";
import "./MyCharts.css";

export function MyCharts() {

    // const [charts, setCharts] = useState();
    // const credentials = useParams();
    //
    // useEffect(() => {
    //     const url = `https://localhost:3001/account/${credentials}/mycharts/chartsview`;
    //
    //     const fetchData = async () => {
    //         await fetch(url)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data);
    //                // const d = [data];
    //                 setCharts(data)
    //             });
    //     };
    //
    //     fetchData();
    //     //console.log(charts);
    // }, []);

    //charts.chartID, charts.chartTitle, charts.....

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
            </div>
            <div className="container vertical-scrollable">
                <div className="row text-center">

                    {charts && (charts.map(chart => (
                        <div className="col-sm-8">
                            <Container>
                                <Row className="align-items-start">
                                    <Col>
                                        <Card key={chart.chartID}>
                                            <Card.Body>
                                                <Card.Title>{chart.chartTitle}</Card.Title>
                                                <Card.Text>{chart.library}</Card.Text>
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