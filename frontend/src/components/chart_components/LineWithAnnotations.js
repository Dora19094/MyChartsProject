import React, {useEffect, useState, useCallback} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function LineWithAnnotations({chartData}) {

    const chartConfig = chartData;



    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartData}
        />

    );


}

export default LineWithAnnotations;