const createChart = require('../services/createChart');


const createChartController = (req, res) => {
        const userChartData = req.body;
        const chartResult = createChart(userChartData);

        if (chartResult)
            res.send(chartResult);
}

module.exports = createChartController;