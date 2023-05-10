import React, {useEffect, useState, useCallback} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from "lodash";


function BasicColumn({chartData}) {

    const chartConfig  =
        {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: []
        }

        function finalConfig(){
            //console.log(chartData);
            chartConfig.title.text = chartData[0].Title;
            chartConfig.subtitle.text = chartData[0].Subtitle;
            chartConfig.yAxis.min = Number(chartData[0].yAxisMin);
            chartConfig.yAxis.title.text = chartData[0].yAxisTitle;
            _.map(chartData, (collect) => {
                _.forEach(collect, function(value, key) {
                    let pushed = false;
                    if (key === 'xAxisCategories') chartConfig.xAxis.categories.push(value);
                    chartConfig.series.forEach((item) =>
                        {
                            if (item.name === key) {
                                item.data.push(Number(value));
                                pushed = true;
                            }

                        }

                    )
                    if (!pushed && key!=="Title" && key!=="Subtitle" && key!=="yAxisTitle"
                        && key!=="yAxisMin" && key !== "xAxisCategories")
                        chartConfig.series.push({name :key, data: [Number(value)]});

                })
            });
            //console.log(chartConfig);
            console.log("Column code run");
            return chartConfig;
        }



    return (

        <HighchartsReact
            highcharts={Highcharts}
            options={finalConfig()}
        />

);


}

export default BasicColumn;