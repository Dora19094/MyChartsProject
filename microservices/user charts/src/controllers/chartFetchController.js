const fetchChart = require('../services/fetchChart');
const chartFetchController = async (req, res) => {

    try {
        const chartName = req.params.chartName; // JSON data sent from the frontend
        const result = await fetchChart(chartName/*,userId*/);
        // Send a response back to the frontend
        res.send(result);
    } catch (error) {
        // Handle any errors that occur during processing
        console.error(error);
        res.status(500).send({ error: 'An error occurred while fetching the chart' });
    }

}

module.exports = chartFetchController;