const chartConfig = require("../models/ChartConfig");


const fetchChart = async () => {
    //It returns a promise!
    const user = 12;
    return (
         chartConfig.find({userId: user})
             .then(function(charts)
            {
                 console.log(charts);
                 if (charts) return charts;
                 else throw new Error("No such chart found!");
             })
             .catch((err) =>{
                 console.log('Error finding Chart', err);
                 //return {error: err.message};
             })
    )
};

module.exports= fetchChart;