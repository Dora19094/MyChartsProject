const mongoose = require("mongoose");
const { Schema } = mongoose;
const BasicLineSchema = new Schema({

    chartType :{
        type: String
    },
    title: {
        text: {
            type: String,
        },
        align: {
            type: String
        }
    },

    subtitle: {
        text: {
            type:String
        },
        align: {
            type: String
        }
    },

    yAxis: {
        title: {
            text: {
                type: String
            }
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: {
                type: String
            }
        }
    },

    legend: {
        layout: {
            type: String
        },
        align: {
            type: String
        },
        verticalAlign: {
            type: String
        }
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: {
                    type: Boolean
                }
            },
            pointStart:
                {
                    type: Number
                }
        }
    },

    series: [
        {
            name: String,
            data: [Number],
        },
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: {
                    type: Number
                }
            },
            chartOptions: {
                legend: {
                    layout: {
                        type: String
                        },
                    align: {
                        type: String
                    },
                    verticalAlign: {
                        type: String
                    }
                }
            }
        }]
    }

});

const BasicLine = mongoose.model("BasicLine", BasicLineSchema);
module.exports = BasicLine;