const getConfigMongo = require('../services/getConfigMongo');


const chartConfig = (req, res) => {
        const chartType = req.params.chartType;
        getConfigMongo(chartType)
            .then((config) => {
                    console.log(config);
                    res.send(config);
            })
            .catch(error => {
                    console.log(error);
                    res.sendStatus(500);
            });
}

module.exports = chartConfig;