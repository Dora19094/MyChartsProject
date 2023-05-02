import React, { useEffect, useState, useCallback} from "react";
import Button from "react-bootstrap/Button";
import "./CreateDiagram.css";
import logo from "../logo.svg";
import {Card, Carousel} from "react-bootstrap";
import Dropzone from "./Dropzone";


function CreateDiagram() {
    return (
        <div className={"templates-container"}>
            <img src={logo} className="templates-logo" alt="logo" />
            <div class={"column"}>
                <div class={"row"}
                     style={{display: "flex", justifyContent: "center", alignItems: "center", height: "40vh"}}>
                    <Carousel interval={null}>
                        <Carousel.Item>
                            <Card style={{width: "20rem", height: "30vh"}}>
                                <Card.Body>
                                    <Card.Title>First template</Card.Title>
                                    <Card.Text>
                                        Text
                                    </Card.Text>
                                    <Button variant="outline-info">Choose</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card style={{width: "20rem", height: "30vh"}}>
                                <Card.Body>
                                    <Card.Title>Second template</Card.Title>
                                    <Card.Text>
                                        Text2
                                    </Card.Text>
                                    <Button variant="outline-info">Choose</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
            </div>
            <div class={"row"}>
                <Dropzone />
            </div>
        </div>
        </div>
    );
}

export default CreateDiagram;





