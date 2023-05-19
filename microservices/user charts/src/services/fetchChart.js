const chartConfig = require("../models/ChartConfig");


const fetchChart = async (chartName/*,userId*/) => {
    //It returns a promise!
    const user = 12;
    return (
         chartConfig.findOne({'chartName' : chartName,userId: user})
             .then(function(chart)
            {
                 if (chart) return chart;
                 else throw new Error("No such chart found!");
             })
             .catch((err) =>{
                 console.log('Error finding Chart', err);
                 //return {error: err.message};
             })
    )
};

module.exports= fetchChart;