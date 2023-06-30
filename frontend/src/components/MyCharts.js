import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./style/Charts.css";
import logo from "../logo.svg";
import {Card, Col, Container, DropdownButton,Dropdown, Row} from "react-bootstrap";
import "./style/MyCharts.css";
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import ExportSVG from 'highcharts/modules/exporting';
import ExportPDF from 'highcharts/modules/exporting';
import ExportPNG from 'highcharts/modules/exporting';
// Initialize the required Highcharts modules
Exporting(Highcharts);
ExportSVG(Highcharts);
ExportPDF(Highcharts);
ExportPNG(Highcharts);

export function MyCharts() {

    const [charts, setCharts] = useState();
    const {state} = useLocation();
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    // const [accessToken, setAccessToken] = useState(state.accessToken);

    useEffect(() => {
        fetch('http://localhost:4003/user-chart/fetch', {
            method: 'GET',
            //credentials: "include",
            headers: {
                'Authorization': `Bearer ${state.accessToken}`,
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCharts(data);
            })
    }, []);

    const navigate = useNavigate();
    const {credentials} = useParams();

    function handleAccount() {
        navigate(`/account/${credentials}`, {
            state: {
                accessToken: state.accessToken,
                refreshToken: state.refreshToken
            },
        });
    }



    function selectChart(chartOptions){
        console.log("Chart selected");
        chartOptions.exporting.enabled = false;
        console.log(chartOptions);
        Highcharts.chart('chart-container', chartOptions);
    }

    function downloadChart(chartOptions,format){
        delete chartOptions._id;
        delete chartOptions.userId;
        delete chartOptions.__v;
        const chart = Highcharts.chart('chart-container', chartOptions);
        if (format === 'html'){
            const svg = chart.getSVG();
            const html = `<html>
                               <body>
                                  ${svg}
                               </body>
                          </html>`;

            // Download the HTML file
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(html));
            element.setAttribute('download', 'chart.html');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }

        else {
            chart.exportChart({ type: format });
        }
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" style={{marginBottom: '30px'}}/>
            <div className="d-flex justify-content-md-start">
                <h3 className="me-2">
                    {state.email}@gmail.com
                </h3>
                <Button className="me-2" variant="outline-info" onClick={handleAccount}>
                    Back to my account
                </Button>
            </div>
            <div className="container vertical-scrollable">
                <div className="row text-center">

                    {charts && (charts.map(chart => (
                        <div className="col-sm-8">
                            <Container>
                                <Row className="align-items-start">
                                    <Col>
                                        <Card key={chart._id} onClick={() => selectChart(chart)} style={{backgroundColor:'whitesmoke'}}>
                                            <Card.Body>
                                                <Card.Title>{chart.chartName}</Card.Title>
                                                <Card.Text>{chart.chartType}</Card.Text>
                                                <Card.Text>{chart.createdOn}</Card.Text>
                                                <DropdownButton title="Export Chart" variant="outline-info">
                                                    <Dropdown.Item
                                                        onClick={() => downloadChart(chart,'image/png')}
                                                    >
                                                        PNG
                                                    </Dropdown.Item>
                                                    <Dropdown.Item
                                                        onClick={() => downloadChart(chart,'application/pdf')}
                                                    >
                                                        PDF
                                                    </Dropdown.Item>
                                                    <Dropdown.Item
                                                        onClick={() => downloadChart(chart,'html')}
                                                    >
                                                        HTML
                                                    </Dropdown.Item>
                                                    <Dropdown.Item
                                                        onClick={() => downloadChart(chart,'image/svg')}
                                                    >
                                                        SVG
                                                    </Dropdown.Item>
                                                </DropdownButton>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )))}
                </div>
            </div>
            <div id="chart-container"/>
        </div>
    )
}