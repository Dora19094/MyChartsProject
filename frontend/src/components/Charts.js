import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";
import logo from "../logo.svg";
import {Card, Carousel, CarouselItem, Stack} from "react-bootstrap";

export function Charts() {

    return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            <div>
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
                                            Tokens: 2.
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
        </div>
    );
}