const saveChart = require('../services/saveChart');
const chartSaveController = async (req, res) => {

        const jsonData = req.body; // JSON data sent from the frontend
        const result = await saveChart(jsonData);
        if (result.status === 'ok')
                res.send(result);
        else{
                res.status(500).send({ error: 'An error occurred during saving data ' });
        }

}

module.exports = chartSaveController;