
const polarParser = async (chartUserData,chartConfig) => {

    console.log(chartConfig);
    chartConfig.title.text = chartUserData[2][0];
    chartConfig.subtitle.text = chartUserData[2][1]
    const types = ['column','line','area'];
    let seriesObjects = [];

    for (let col = 0;col<chartUserData[5].length;col+=2)
    {
        seriesObjects.push({
            type: types[col/2],
            name: chartUserData[5][col+1],
            data: [chartUserData[5][col]]
        })
    }

    for (let row = 6; row < chartUserData.length; row++)
    {
        for (let i =0;i<seriesObjects.length;i++)
            seriesObjects[i].data.push(chartUserData[row][i*2]);
    }

    chartConfig.series = seriesObjects;
    delete chartConfig._id;
    delete chartConfig.id;
    console.log(chartConfig);
    return chartConfig;

};

module.exports= polarParser;