import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";

import logo from "../logo.svg";
import {Card, Carousel, CarouselItem, Modal, Nav, Stack} from "react-bootstrap";
import GoogleLoginButton from "./GoogleLoginButton";


export function MyCharts() {


    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
        </div>
    );
}