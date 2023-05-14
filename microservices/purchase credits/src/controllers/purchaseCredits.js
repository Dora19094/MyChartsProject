const sendCreditsRabbit = require("../services/sendCreditsRabbit");

const purchaseCredits = (req,res) => {
    const numOfCredits = req.params.numOfCredits
    const message = {
        userId: req.user_id,
        numOfCredits: numOfCredits
    }
    sendCreditsRabbit(message);
    res.send({numOfCredits: numOfCredits})
}

module.exports=purchaseCredits;