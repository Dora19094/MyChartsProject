import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";
import logo from "../logo.svg";
import {Card, Col, Container, Row} from "react-bootstrap";
// import {charts} from "./data";
import "./MyCharts.css";

export function ErrorMessage() {

    const navigate = useNavigate();
    const {credentials} = useParams();

    function handleBack() {
        navigate(`/account/${credentials}/newchart`,);
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="d-flex justify-content-md-start">
                <h3 className="me-2">
                    Cannot prepare your chart. Your uploaded file contained errors.
                </h3>
                <Button className="me-2" variant="outline-info" onClick={handleBack}>
                    go back
                </Button>
            </div>

        </div>
    )
}