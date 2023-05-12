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
import {Link, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";
import logo from "../logo.svg";
import {ButtonGroup, ButtonToolbar, Card, Carousel, CarouselItem, Col, Modal, Row, Stack, Toast} from "react-bootstrap";
import "./Account.css";
import ChartWrapper from "./chart_components/DisplayChart";

export default function ErrorChart() {
// get file data
    function handleDiscard() {
        //navigate
    }

    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (
        <div>
            <h5>Your -selected type- chart is ready. </h5>
            <img src={logo} className="template-logo" alt="logo"/>
            <Card>
                <img src={logo} style={{height: 56, width: 56}} className="App-logo" alt="logo"/>

                {/*<ChartWrapper chartType ={"line"} chartData = {} ></ChartWrapper>*/}

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
