

const basicLineParser = async (chartUserData,chartConfig) => {

    chartConfig.title.text = chartUserData[2][0];
    chartConfig.subtitle.text = chartUserData[2][1];
    chartConfig.plotOptions.series.pointStart = chartUserData[2][2];
    chartConfig.xAxis.accessibility.rangeDescription = chartUserData[2][3];
    chartConfig.yAxis.title.text = chartUserData[2][4];
    let names = chartUserData[4];

    for (let col = 0; col < chartUserData[4].length; col++) {
        let func = { name: names[col], data: [] };

        for (let row = 5; row < chartUserData.length; row++) {
            func.data.push(chartUserData[row][col]);
        }
        chartConfig.series.push(func);
    }
    console.log(chartConfig);
    return chartConfig;
};

module.exports= basicLineParser;