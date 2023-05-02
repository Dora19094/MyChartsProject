import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";
import { GoogleLogin } from '@react-oauth/google';
import logo from "../logo.svg";
import {Card, Carousel, CarouselItem, Modal, Stack} from "react-bootstrap";

export function Charts() {

    const [show, setShow] = useState(false);
    function handleClose(){setShow(false);}
    function handleShow() {setShow(true);}
    function responseMessage(response){
        console.log(response);
    }
    function errorMessage(error) {
        console.log(error);
    }

    return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            <div>

<div>
    <Button variant="outline-info" onClick={handleShow}>
        Log in or Sign in with Google
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Welcome</Modal.Title>
        </Modal.Header>
        <Modal.Body> Sign in with your Google Account

            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
</div>


                <Carousel style={{ height: 500 }}>
                        <Carousel.Item style={{ height: 500 }}>
                            <Stack
                                direction="horizontal"
                                className="h-100 justify-content-center align-items-center"
                                gap={3}
                            >
                                <Card style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Card.Title>Network graph</Card.Title>
                                        <Card.Text>
                                            library: 'highcharts'.
                                        </Card.Text>
                                        <Button variant="outline-info">Choose</Button>
                                    </Card.Body>
                                </Card>

                                <Card style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Card.Title>Polar (radar) chart</Card.Title>
                                        <Card.Text>
                                            library: 'highcharts'
                                        </Card.Text>
                                        <Button variant="outline-info">Choose</Button>
                                    </Card.Body>
                                </Card>

                                <Card style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Card.Title>Stem plot</Card.Title>
                                        <Card.Text>
                                            library: 'matplotlib'
                                        </Card.Text>
                                        <Button variant="outline-info">Choose</Button>
                                    </Card.Body>
                                </Card>
                            </Stack>
                        </Carousel.Item>
                        <CarouselItem style={{ height: 500 }}>
                            <Stack
                                direction="horizontal"
                                className="h-100 justify-content-center align-items-center"
                                gap={3}
                            >
                                <Card style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Card.Title>Bar chart on polar axis</Card.Title>
                                        <Card.Text>
                                            library: 'matplotlib'
                                        </Card.Text>
                                        <Button variant="outline-info">Choose</Button>
                                    </Card.Body>
                                </Card>

                            <Card style={{ width: "18rem" }}>
                                <Card.Body>
                                    <Card.Title>Bubble</Card.Title>
                                    <Card.Text>
                                        library: 'chartjs'
                                    </Card.Text>
                                    <Button variant="outline-info">Choose</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: "18rem" }}>
                                <Card.Body>
                                    <Card.Title>Scatter</Card.Title>
                                    <Card.Text>
                                        library: 'chartjs'
                                    </Card.Text>
                                    <Button variant="outline-info">Choose</Button>
                                </Card.Body>
                            </Card>
                                </Stack>
                        </CarouselItem>
                </Carousel>
            </div>
               <div>
                   <h5> Press on a diagram to see how this works, or log in with your google account to start creating your diagrams.</h5>
               <div className="d-flex justify-content-left">
                   <p> about </p>
               </div>
               </div>
            </div>
    );
}