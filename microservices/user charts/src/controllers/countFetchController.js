const getCount = require('../services/getCount');
const {isNumber} = require("lodash");
const countFetchController = async (req, res) => {

    const result = await getCount();
    if (isNumber(result))
        res.send({count : result});
    else{
        res.status(500).send({ error: 'An error occurred during counting charts ' });
    }

}

module.exports = countFetchController;