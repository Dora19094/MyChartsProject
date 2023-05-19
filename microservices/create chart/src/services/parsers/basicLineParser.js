const validateData = require('../validate');

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
            if (chartUserData[row][col] === undefined ||
                chartUserData[row][col] === null)
                func.data.push(null);
            else
            {
                if (chartUserData[row][col].isNumber())
                    func.data.push(chartUserData[row][col]);
                else
                    return {status:"error"};
            }

        }
        chartConfig.series.push(func);
    }

    delete chartConfig._id;
    delete chartConfig.id;
    console.log(chartConfig);
    try {
        validateData(chartConfig)
    }catch(err){
        console.log(err.message);
        return {status:"error"};
    }

    return chartConfig;
};

module.exports= basicLineParser;