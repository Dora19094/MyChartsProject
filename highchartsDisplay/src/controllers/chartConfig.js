const getConfigMongo = require('../services/getConfigMongo');


const chartConfig = (req, res) => {
        const chartType = req.params.chartType;
        let config = getConfigMongo(chartType);
        console.log("response")
        console.log(config)
        res.send(config);
}

module.exports = chartConfig;