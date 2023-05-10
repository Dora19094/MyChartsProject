const BasicLine = require("../models/BasicLineConfig");


const getConfigMongo = async (chartType) => {
    return (
        BasicLine.findOne({'chartType' : chartType})
            .then(function(config)
            {
                if (config) return config;
                else throw new Error("No configuration found!");
            })
            .catch((err) =>{
                console.log('Error finding Configuration', err);
                res.status(500).send({error: err.message});
                //next(err);
            })
    )
};

module.exports= getConfigMongo;