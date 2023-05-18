const basicColumnParser = require("./basicColumnParser")
const basicLineParser = require("./basicLineParser");
const networkParser = require("./networkParser");
const dependencyWheelParser = require("./dependencyWheelParser");
const polarParser = require("./polarParser");
const lineWithAnnotationsParser = require("./lineWithAnnotationsParser");
const getConfig = require("./getConfigMongo");


const createChart = async (jsonData,chartType) => {
    const chartCon = await getConfig(chartType);
    const chartConfig = await chartCon.toObject({ getters: true });
    //console.log(chartConfig);

    switch(chartType){
        case "basicLine": return(basicLineParser(jsonData,chartConfig));
        case "basicColumn": return (basicColumnParser(jsonData,chartConfig));
        case "network": return (networkParser(jsonData,chartConfig));
        case "dependencyWheel": return (dependencyWheelParser(jsonData,chartConfig));
        case "polar": return (polarParser(jsonData,chartConfig));
        case "lineWithAnnotations": return (lineWithAnnotationsParser(jsonData,chartConfig));
        default: return ({});
    }

};

module.exports= createChart;