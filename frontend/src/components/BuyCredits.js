import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";
import logo from "../logo.svg";
import {ButtonGroup, ButtonToolbar, Card, Carousel, CarouselItem, Col, Modal, Row, Stack} from "react-bootstrap";
import "./Account.css";

// url here needs accountID email
export default function BuyCredits() {

    function handle5() {
        console.log("bought 5 credits!");
    }

    function handle10() {
        console.log("bought 10 credits!");
    }

    function handle15() {
        console.log("bought 15 credits!");
    }

    function handle20() {
        console.log("bought 20 credits!");
    }

    function handleClick() {
        //navigate to previous page
    }

    return (
        <div>
            <img src={logo} className="template-logo" alt="logo"/>
            <div className="justify-content-start">
                <h3 className='mt-5'> you're logged in as </h3>
                <div className='mt-5'>
                    <ButtonToolbar>
                        <ButtonGroup className="me-2">
                            <Button variant="outline-info" style={{height: 200, width: 150}} onClick={handle5}>
                                5 credits
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2">
                            <Button variant="outline-info" style={{height: 200, width: 150}} onClick={handle10}>
                                10 credits
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2">
                            <Button variant="outline-info" style={{height: 200, width: 150}} onClick={handle15}>
                                15 credits
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2">
                            <Button variant="outline-info" style={{height: 200, width: 150}} onClick={handle20}>
                                20 credits
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <Button className="mt-5" variant="outline-dark" onClick={handleClick}>
                        cancel purchase
                    </Button>
                </div>
            </div>
        </div>
    );
}
