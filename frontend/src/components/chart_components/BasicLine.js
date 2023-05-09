//import React, {useEffect, useState, useCallback} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';

function BasicLine({chartData}) {

    let chartConfig =
        {

            title: {
                text: 'something',
                align: 'left'
            },

            subtitle: {
                text: '',
                align: 'left'
            },

            yAxis: {
                title: {
                    text: ''
                }
            },

            xAxis: {
                accessibility: {
                    rangeDescription: ''
                }
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 0
                }
            },

            series: [],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        }

        function configFinal() {
        console.log(chartData);
            chartConfig.title.text = chartData[0].Title;
            chartConfig.subtitle.text = chartData[0].Subtitle;
            chartConfig.xAxis.accessibility.rangeDescription = chartData[0].xAxisRange;
            chartConfig.yAxis.title.text = chartData[0].yAxisTitle;
            chartConfig.plotOptions.series.pointStart = Number(chartData[0].pointStart);
            _.map(chartData, (collect) => {
                _.forEach(collect, function(value, key) {
                            let pushed = false;
                            chartConfig.series.forEach((item) =>
                                {
                                    if (item.name === key) {
                                        item.data.push(Number(value));
                                        pushed = true;
                                    }

                                }

                            )
                    if (!pushed && key!="Title" && key!="Subtitle" && key!="xAxisRange"
                        && key!="yAxisTitle" && key!="pointStart")
                        chartConfig.series.push({name :key, data: [Number(value)]});

                })
            });
            return chartConfig;
        }





    return (

        <HighchartsReact
            highcharts={Highcharts}
            options={configFinal()}
        />

);


}

export default BasicLine;