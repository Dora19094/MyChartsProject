import React, {useEffect, useState} from "react";
import BasicLine from "./BasicLine";
import chartCsvData1 from "../chartData";
import LineWithAnnotations from "./LineWithAnnotations";
import BasicColumn from "./BasicColumn";
import DependencyWheel from "./DependencyWheel";
import NetworkGraph from "./NetworkGraph";
import PolarRadar from "./PolarRadar";
import chartData from "../chartData";
const csv=require('csvtojson');


async function ChartSelector({chartType, chartCsvData}) {

    const chartData = await csv({
        ignoreEmpty : true,
        noheader: false,
        delimiter: ',',
        output: "json"
    }).fromString(chartCsvData1);

    switch (chartType) {
        case "area":
            return <LineWithAnnotations chartData={chartData}/>;
        case "column":
            return <BasicColumn chartData={chartData}/>;
        case "dependencywheel":
            return <DependencyWheel chartData={chartData}/>;
        case "networkgraph":
            return <NetworkGraph chartData={chartData}/>;
        case "polar":
            return <PolarRadar chartData={chartData}/>;
        default:
            return <BasicLine chartData={chartData}/>;
    }
}

export default function ChartWrapper(chartType/*,chartcsvData*/) {
    const [chart, setChart] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const chart = await ChartSelector({chartType,chartCsvData1}) ;
            setChart(chart);

        }
        fetchData();
    }, [chartType]);

    return <div>{chart}</div>;
}
