const Joi = require('joi');
const validationSchemas = {
    //basicLine
    basicLine: Joi.object({
        plotOptions: Joi.object({series:Joi.object({pointStart: Joi.number().required()})}),
    }),
    //basicColumn
    basicColumn: Joi.object({
        yAxis: Joi.object({min:Joi.number()}),
    }),
    //network
    network: Joi.object(),
    //polar
    polar: Joi.object(),
    //dependency wheel
    dependencyWheel: Joi.object(),
    //line with annotations
    lineWithAnnotations: Joi.object()

};

module.exports = validationSchemas;