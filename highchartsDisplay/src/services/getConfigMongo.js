const BasicLine = require("../models/BasicLineConfig");

const getConfigMongo = async (chartType) => {
    console.log("getting config");
    BasicLine.findOne({'chartType' : chartType})
        .then(function(config)
        {
            console.log("services");
            if (config) return config;
            else throw new Error("No configuration found!");
        })
        .catch((err) =>{
            console.error('Error finding Configuration', err);
            //next(err);
        })

};

module.exports= getConfigMongo;