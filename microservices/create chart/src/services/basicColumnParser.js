
const basicColumnParser = async (chartUserData,chartConfig) => {

    chartConfig.title.text = chartUserData[2][0];
    chartConfig.subtitle.text = chartUserData[2][1];
    chartConfig.yAxis.min = chartUserData[2][2];
    chartConfig.yAxis.title.text = chartUserData[2][3];
    let names = chartUserData[4];
    for (let i = 5;i<chartUserData.length;i++)
    {
        if (chartUserData[i][0])
            chartConfig.xAxis.categories.push(chartUserData[i][0])
    }
    for (let col = 1; col < chartUserData[4].length; col++) {
        let func = { name: names[col], data: [] };

        for (let row = 5; row < chartUserData.length; row++) {
            func.data.push(chartUserData[row][col]);
        }
        chartConfig.series.push(func);
    }
    console.log(chartConfig);
    return chartConfig;

};

module.exports= basicColumnParser;