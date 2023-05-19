const Joi = require('joi');
const validationSchemas = require('./validationSchemas');
const validateData = (jsonData) => {

    const chartType = jsonData.chartType;
    const chartValidationSchema = validationSchemas[chartType];

    if (!chartValidationSchema) {
        throw new Error(`Invalid chart type: ${chartType}`);
    }

    const { error } = chartValidationSchema.validate(jsonData);
    if (error) {
        throw new Error(`Invalid chart data: ${error.message}`);
    }

};

module.exports= validateData;