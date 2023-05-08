import React, {useEffect, useState, useCallback} from "react";
import Button from "react-bootstrap/Button";
import "./NewChart.css";
import logo from "../logo.svg";
import {Card, Carousel, CarouselItem, Col, Stack} from "react-bootstrap";
import Dropzone from "./Dropzone";
import {charts} from './data.js';

function NewChart() {

    //fetch  chartID, chartΙmage, chart's csv prototype, type
    // {charts [ {chardID, chartImage, chartCSV, chartType} ]}
//     const [account, setAccount] = useState();
//     const {accountID} = useParams();
    // const navigate = useNavigate();
    //    const paramAccountID = accountID; //from url
    //    const paramChartID = charts.chartID

    //a. {baseURL}/account/:accountID/charts/:chartID
    // useEffect(() => {
    //     const url = `https://localhost:3006/account/${accountID}/charts/:chartID`;
    //     const fetchData = async () => {
    //         await fetch(url)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data);
    //                 const d = [data];
    //                 setAccount(d)
    //             });
    //     };
    //
    //     fetchData();
    //     if (account) {
    //         console.log(account);
    //     } // we add [0] because resource is & returns a list
    // }, []);


    function handleClick() {
        console.log("clicked");
    }

    return (
        <div>
            <Col>
                <img src={logo} className="template-logo" alt="logo"/>
            </Col>
            <Col>
                <h2 className='mt-5'> Let's create your own chart!</h2>

                <Carousel style={{backgroundColor: "whitesmoke", borderColor: "black"}}>
                    {charts.map((chart) => (
                        <CarouselItem key={chart.chartID}
                                      style={{height: 280}}>
                            <Carousel.Caption style={{color: "black", backgroundColor: "whitesmoke"}}>
                                {chart.chartTitle}
                                <div className="justify-content-xl-end">
                                    <Button variant="outline-dark">
                                        select
                                    </Button></div>
                            </Carousel.Caption>
                        </CarouselItem>
                    ))}
                </Carousel>

                <div className='mt-5'>
                    <Dropzone/>
                </div>
            </Col>
        </div>
    );
}

export default NewChart;




