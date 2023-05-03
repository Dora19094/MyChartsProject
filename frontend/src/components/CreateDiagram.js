import React, { useEffect, useState, useCallback} from "react";
import Button from "react-bootstrap/Button";
import "./CreateDiagram.css";
import logo from "../logo.svg";
import {Card, Carousel, Col} from "react-bootstrap";
import Dropzone from "./Dropzone";

function CreateDiagram() {
    //fetch, url parameter , specific chart type , database with data about each chart : type , images, id
    function handleClick(){
        return;
    }

    return (
        <div>

        <Col>
            <img src={logo} className="templates-logo" alt="logo" />
        </Col>
            <Col>
                <h2> Let's create your own chart!</h2>
                <div className = "d-flex justify-content-center">
                <Carousel interval={null} style={{ width: 500 }} >
                        <Carousel.Item style={{ width: 500 }}>
                            <Card style={{height: "30vh"}}>
                                <Card.Body>
                                    <Button variant="outline-info" onClick={handleClick}>
                                        Download chart description for selected chart type
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item style={{ width: 500 }}>
                            <Card style={{height: "30vh"}}>
                                <Card.Body>
                                    <Button variant="outline-info" onClick={handleClick}>
                                        Download chart description for selected chart type
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div>
                </div>

                <div>
                    <Dropzone />
                </div>
        </Col>
        </div>
    );
}

export default CreateDiagram;





