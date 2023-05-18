const dependencyWheelParser = async (chartUserData,chartConfig) => {

    console.log(chartConfig);
    chartConfig.title.text = chartUserData[2][0];

    for (let row = 5; row < chartUserData.length; row++) {
        chartConfig.series[0].data.push(chartUserData[row])
    }

    delete chartConfig._id;
    delete chartConfig.id;
    console.log(chartConfig);
    return chartConfig;

};

module.exports= dependencyWheelParser;