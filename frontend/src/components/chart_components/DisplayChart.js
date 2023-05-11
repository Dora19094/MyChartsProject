import React, {useEffect, useState} from "react";
import BasicLine from "./BasicLine";
import chartCsvDataF from "../chartData/BasicLineData";
import LineWithAnnotations from "./LineWithAnnotations";
import BasicColumn from "./BasicColumn";
import DependencyWheel from "./DependencyWheel";
import NetworkGraph from "./NetworkGraph";
import PolarRadar from "./PolarRadar";
const csv=require('csvtojson');


async function ChartSelector({chartType, chartCsvData}) {

    const chartData = await csv({
        ignoreEmpty : true,
        noheader: false,
        delimiter: ',',
        output: "json"
    }).fromString(chartCsvData);

    const chartConfig = await
        fetch(`http://localhost:4001/chartConfigs/${chartType}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((response)=>{
                return response;
            })
            .catch((err) => {
                console.log(err.message);
            });

    return (
            (function() {
                console.log(chartConfig);
                switch(chartType) {
                    case "area":
                        return <LineWithAnnotations chartData={chartData} chartConfig={chartConfig}/>;
                    case "column":
                        return <BasicColumn chartData={chartData} chartConfig={chartConfig}/>;
                    case "dependencywheel":
                        return <DependencyWheel chartData={chartData} chartConfig={chartConfig}/>;
                    case "networkgraph":
                        return <NetworkGraph chartData={chartData} chartConfig={chartConfig}/>;
                    case "polar":
                        return <PolarRadar chartData={chartData} chartConfig={chartConfig}/>;
                    default:
                        return <BasicLine chartData={chartData} chartConfig={chartConfig}/>;
                }
            })


    );
}

export default function ChartWrapper(chartType/*,chartcsvData*/) {
    const [chart, setChart] = useState(null);

    useEffect(() => {
        async function fetchChart() {
            const chart = await ChartSelector({chartType: "line", chartCsvData : chartCsvDataF}) ;
            setChart(chart);
        }


        fetchChart();
    }, [chartType]);

    return <div>{chart}</div>;
}
