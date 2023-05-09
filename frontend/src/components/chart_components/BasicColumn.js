import React, {useEffect, useState, useCallback} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function BasicColumn({chartData}) {


    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartData}
        />

);


}

export default BasicColumn;