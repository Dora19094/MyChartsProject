const chartConfig = require("../models/ChartConfig");

const saveChart = async (userData,date,user) => {

    await Object.assign(userData,{createdOn: date, userId : user});
    let chart = new chartConfig(userData);
    console.log(chart);

    //It returns a promise!
    return (
        chart.save().
        then(()=>{
                return {status:"ok"};
        }).catch((err) =>{
            console.log(err);
            return {status:"error"};
        })

    )
};

module.exports= saveChart;