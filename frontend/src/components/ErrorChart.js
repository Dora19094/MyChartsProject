/*
* here i must do a get request and return
* (on success return sucess page and save chart to my charts or discard and go back (useNavigate)
* )
* :(
* on error return error page (toast message))
*
*
*
*
*
*
*
*
*
*
* */
import React, {useState, useRef, useEffect} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Charts.css";
import logo from "../logo.svg";
import {ButtonGroup, ButtonToolbar, Card, Toast} from "react-bootstrap";
import "./Account.css";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import HighchartSankey from "highcharts/modules/sankey";
import HighchartsWheel from "highcharts/modules/dependency-wheel";
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsNetwork from "highcharts/modules/networkgraph";
HighchartsMore(Highcharts);
HighchartSankey(Highcharts);
HighchartsWheel(Highcharts);
HighchartsNetwork(Highcharts);

export default function ErrorChart() {

    const navigate = useNavigate();
    const {credentials} = useParams();
    const {state} = useLocation();
    const [answer, setAnswer] = useState();
    console.log(state);

    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current && chartRef.current.chart) {
            // Call chart.reflow() to make the chart responsive
            chartRef.current.chart.reflow();
        }
    }, [chartRef.current]);

// get file data
    function handleDiscard() {
        //navigate
        navigate(`/account/${credentials}`, {
            state: {
                accessToken: state.accessToken,
                refreshToken: state.refreshToken
            },
        });
    }

    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    async function handleSave() {
        console.log(state.files);
            //get one credit from this user!
            const today = new Date(),
                date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

            const requestOptions = {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${state.accessToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(state.files),
            };
            const url = `http://localhost:4003/user-chart/save/${date}`
            /*await*/
            await fetch(url, requestOptions).then((res) => {
                console.log("Your chart has been saved and the backend response is:");
                console.log(res);
            });

            navigate(`/account/${credentials}/mycharts`, {
                state: {
                    accessToken: state.accessToken,
                    refreshToken: state.refreshToken
                },
            });

    }

    return (
        <div>
            <h5>Your -selected type- chart is ready. </h5>
            <img src={logo} className="template-logo" alt="logo"/>
            <Card style={{height: 500, width: 500}}>
                <img src={logo} style={{height: 56, width: 56}} className="App-logo" alt="logo"/>
                <div style={{ height: '80%' }} ref={chartRef}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={state.files}
                />
                </div>

                <Card.Footer>
                    <p>
                        Created Chart
                    </p>
                </Card.Footer>
            </Card>
            <ButtonToolbar className='mt-3'>
                <ButtonGroup className="me-2">
                    <Button variant={"outline-info"} onClick={handleSave}>
                        Save to my charts
                    </Button>
                </ButtonGroup>
                <ButtonGroup className="me-2">
                    <Button variant={"outline-dark"} onClick={handleDiscard}>
                        Discard
                    </Button>
                </ButtonGroup>
            </ButtonToolbar>

            <label htmlFor="selectToastPlacement">Toast position</label>
            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <strong className="me-auto">Error</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body><p>Cannot prepare your chart. Your uploaded file contains errors.</p></Toast.Body>
            </Toast>
        </div>
    );
}
