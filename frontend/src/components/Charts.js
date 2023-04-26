import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";
import { charts } from './data.js';
import logo from "../logo.svg";
import {Carousel} from "react-bootstrap";

export function Charts() {

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />

            <div className="charts-grid">
            {charts.map((chart) => (
                <div className="div-card" key={chart.chartID}>
                    <h3>{chart.chartTitle}</h3>
                    <div className="d-flex justify-content-end">
                        <Button
                            // as={Link}
                            // to={`/questionnaires/${questionnaire._id}`}
                            variant="primary"
                        >
                            Choose
                        </Button>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
);
}