/*
* here i must do a get request and return
* (on success return sucess page and save chart to my charts or discard and go back (useNavigate)
* )
* :(
* on error return error page (toast message))
*
*
*
*
*
*
*
*
*
*
* */
import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";
import logo from "../logo.svg";
import {ButtonGroup, ButtonToolbar, Card, Carousel, CarouselItem, Col, Modal, Row, Stack, Toast} from "react-bootstrap";
import "./Account.css";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

export default function ErrorChart() {

    const navigate = useNavigate();
    const {credentials} = useParams();
    const location = useLocation();
    const { files } = location.state;

// get file data
    function handleDiscard() {
        //navigate
        navigate(`/account/${credentials}`, {
            state: {
                credentials: credentials,
            },
        });
    }

    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (
        <div>
            <h5>Your -selected type- chart is ready. </h5>
            <img src={logo} className="template-logo" alt="logo"/>
            <Card style={{height: 500, width: 600}}>
                <img src={logo} style={{height: 56, width: 56}} className="App-logo" alt="logo"/>

                <HighchartsReact highcharts={Highcharts}
                                 options={files}
                />

                <Card.Footer>
                    <p>
                        Created Chart // fetch/get chart and display here
                    </p>
                </Card.Footer>
            </Card>
            <ButtonToolbar className='mt-3'>
                <ButtonGroup className="me-2">
                    <Button variant={"outline-info"}>
                        Save to my charts
                    </Button>
                </ButtonGroup>
                <ButtonGroup className="me-2">
                    <Button variant={"outline-dark"} onClick={handleDiscard}>
                        Discard
                    </Button>
                </ButtonGroup>
            </ButtonToolbar>

            <label htmlFor="selectToastPlacement">Toast position</label>
            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <strong className="me-auto">Error</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body><p>Cannot prepare your chart. Your uploaded file contains errors.</p></Toast.Body>
            </Toast>
        </div>
    );
}
