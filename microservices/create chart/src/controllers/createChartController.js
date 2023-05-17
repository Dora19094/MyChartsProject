const createChart = require('../services/createChart');


const createChartController = async (req, res) => {

        try {
                const jsonData = req.body; // JSON data sent from the frontend
                console.log(jsonData);
                const chartType = jsonData[2][jsonData[2].length-1];
                const result = await createChart(jsonData,chartType);
                // Send a response back to the frontend
                res.send(result);
        } catch (error) {
                // Handle any errors that occur during processing
                console.error(error);
                res.status(500).send({ error: 'An error occurred during data processing' });
        }

}

module.exports = createChartController;