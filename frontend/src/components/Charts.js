import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import "./Charts.css";

import logo from "../logo.svg";
import network from "../chartimages/netwrokgraph.jpg";
import column from "../chartimages/basiccolumn.png";
import line from "../chartimages/basicline.png";
import dependency from "../chartimages/Dependency.png";
import polar from "../chartimages/polar.png";
import annotation from "../chartimages/annotation.png";
import {Card, Carousel, CarouselItem, Modal, Nav, Stack} from "react-bootstrap";
import GoogleLoginButton from "./GoogleLoginButton";


export function Charts() {

    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }


    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
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
                            <GoogleLoginButton/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <Carousel style={{height: 500}}>
                    <Carousel.Item style={{height: 500}}>
                        <Stack
                            direction="horizontal"
                            className="h-100 justify-content-center align-items-center"
                            gap={3}
                        >
                            <Card style={{width: "18rem"}}>
                                <Card.Body>
                                    <Card.Title>Network graph</Card.Title>
                                    <Card.Text>
                                        library: 'highcharts'.
                                    </Card.Text>
                                    <img src={network} className="logo-main" alt="logo"/>
                                    <Button variant="outline-info">Choose</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{width: "18rem"}}>
                                <Card.Body>
                                    <Card.Title>Polar (radar) chart</Card.Title>
                                    <Card.Text>
                                        library: 'highcharts'
                                    </Card.Text>
                                    <img src={polar} className="logo-main" alt="logo"/>
                                    <Button variant="outline-info">Choose</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{width: "18rem"}}>
                                <Card.Body>
                                    <Card.Title>Basic Line chart</Card.Title>
                                    <Card.Text>
                                        library: 'highcharts'
                                    </Card.Text>
                                    <img src={line} className="logo-main" alt="logo"/>
                                    <Button variant="outline-info">Choose</Button>
                                </Card.Body>
                            </Card>
                        </Stack>
                    </Carousel.Item>
                    <CarouselItem style={{height: 500}}>
                        <Stack
                            direction="horizontal"
                            className="h-100 justify-content-center align-items-center"
                            gap={3}
                        >
                            <Card style={{width: "18rem"}}>
                                <Card.Body>
                                    <Card.Title>Basic Column chart</Card.Title>
                                    <Card.Text>
                                        library: 'highcharts'
                                    </Card.Text>
                                    <img src={column} className="logo-main" alt="logo"/>
                                    <Button variant="outline-info">Choose</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{width: "18rem"}}>
                                <Card.Body>
                                    <Card.Title>Dependency Wheel chart</Card.Title>
                                    <Card.Text>
                                        library: 'highcharts'
                                    </Card.Text>
                                    <img src={dependency} className="logo-main" alt="logo"/>
                                    <Button variant="outline-info">Choose</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{width: "18rem"}}>
                                <Card.Body>
                                    <Card.Title>Line with annotations chart</Card.Title>
                                    <Card.Text>
                                        library: 'highcharts'
                                    </Card.Text>
                                    <img src={annotation} className="logo-main" alt="logo"/>
                                    <Button variant="outline-info">Choose</Button>
                                </Card.Body>
                            </Card>
                        </Stack>
                    </CarouselItem>
                </Carousel>
            </div>
            <div>
                <h5> Press on a diagram to see how this works, or log in with your google account to start creating your
                    diagrams.</h5>
                <div className="d-flex justify-content-left">
                    <Nav
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item>
                            <Nav.Link href="/about">about</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </div>
    );
}