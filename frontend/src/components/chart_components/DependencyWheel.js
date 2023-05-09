import React, {useEffect, useState, useCallback} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function DependencyWheel({chartData}) {


    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartData}
        />

);


}

export default DependencyWheel;