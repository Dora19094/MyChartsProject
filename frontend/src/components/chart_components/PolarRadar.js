import React, {useEffect, useState, useCallback} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function PolarRadar({chartData}) {


    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartData}
        />

);


}

export default PolarRadar;