const createChart = require('../services/createChart');

const createChartController = (req, res) => {

        try {
                console.log("controller activated");
                const jsonData = req.body; // JSON data sent from the frontend
                console.log(jsonData);

                // Process the JSON data as needed
                // ...

                // Send a response back to the frontend
                res.send({ message: 'Data received and processed successfully' });
        } catch (error) {
                // Handle any errors that occur during processing
                console.error(error);
                res.status(500).send({ error: 'An error occurred during data processing' });
        }

}

module.exports = createChartController;