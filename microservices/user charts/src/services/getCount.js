const chartConfig = require('../models/ChartConfig');
const getCount = async () => {
    //It returns a promise!
    const user = 12;
    return (
        chartConfig.count({userId: user})
            .then(function(count)
            {
                console.log(count);
                return count;
            })
            .catch((err) =>{
                console.log('Error counting Charts', err);
                //return {error: err.message};
            })
    )
};

module.exports= getCount;