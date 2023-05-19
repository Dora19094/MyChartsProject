

const lineWithAnnotationsParser = async (chartUserData,chartConfig) => {

    chartConfig.title.text = chartUserData[2][0];
    chartConfig.caption.text = chartUserData[2][1];
    chartConfig.accessibility.description = chartUserData[2][2];
    let x_mu = chartUserData[2][3];
    let y_mu = chartUserData[2][4];
    chartConfig.xAxis.title.text = chartUserData[2][5];
    chartConfig.xAxis.accessibility.rangeDescription = chartUserData[2][6];
    chartConfig.yAxis.title.text = chartUserData[2][7];
    chartConfig.yAxis.accessibility.rangeDescription = chartUserData[2][8];
    chartConfig.xAxis.labels.format += x_mu;
    chartConfig.yAxis.labels.format += y_mu;
    chartConfig.tooltip.headerFormat = chartUserData[2][5]+ ':'
        + chartConfig.tooltip.headerFormat + x_mu + '<br>';
    chartConfig.tooltip.pointFormat += y_mu;
    chartConfig.series[0].lineColor = '#800080';
    chartConfig.series[0].color = '#98FB98';
    let my_data = [];
    let label = {
        point: {
            xAxis: 0,
            yAxis: 0,
            x: 27.98,
            y: 255
        },
        text: ''
    };

    //Get data
    for (let row = 5;row<chartUserData.length;row++)
    {
        my_data.push([chartUserData[row][0],chartUserData[row][1]]);
    }

    //Get Labels
    for (let col = 2;col<6;col+=2)
    {
        let row = 5;
        while (chartUserData[row][col]){
            label.text = chartUserData[row][col];
            label.point.x = chartUserData[row][col+1].split(' ').map(Number)[0];
            label.point.y = chartUserData[row][col+1].split(' ').map(Number)[1];
            chartConfig.annotations[Math.floor(col/3)].labels.push(label);
            row++;
        }

    }

    chartConfig.series[0].data = my_data
    delete chartConfig._id;
    delete chartConfig.id;
    console.log(chartConfig);
    return chartConfig;


};

module.exports= lineWithAnnotationsParser;