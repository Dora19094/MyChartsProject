
import React, {useState, useRef, useEffect} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../style/Charts.css";
import logo from "../images/logo.svg";
import {ButtonGroup, ButtonToolbar, Card, Toast} from "react-bootstrap";
import "../style/Account.css";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import HighchartSankey from "highcharts/modules/sankey";
import HighchartsWheel from "highcharts/modules/dependency-wheel";
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsNetwork from "highcharts/modules/networkgraph";
import AnnotationsModule from 'highcharts/modules/annotations';
AnnotationsModule(Highcharts);
HighchartsMore(Highcharts);
HighchartSankey(Highcharts);
HighchartsWheel(Highcharts);
HighchartsNetwork(Highcharts);

export default function DisplayChart() {

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
                    refreshToken: state.refreshToken,
                    email:state.email,
                },
            });

    }

    return (
        <div>
            <br/>
            <h5>Your chart is ready. </h5>
            <img src={logo} className="template-logo" alt="logo"/>
            <Card style={{height: 600, width: 600}}>
                <div style={{width:590,alignSelf:'center' }} ref={chartRef}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={state.files}
                />
                </div>
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
        </div>
    );
}
