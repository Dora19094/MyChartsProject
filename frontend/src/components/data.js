export const charts = [
    {
        chartID: 'CH00',
        chartTitle: 'Network graph',
        library: 'highcharts',
        CSV_FILE_URL: "http://localhost:3000/ch00_csv.csv",

    },
    {
        chartID: 'CH01',
        chartTitle: 'Polar (radar) chart',
        library: 'highcharts',
        CSV_FILE_URL: "http://localhost:3000/ch01_csv.csv",
    },
    {
        chartID: 'CH02',
        chartTitle: 'Stem plot',
        library: 'matplotlib',
        CSV_FILE_URL: "http://localhost:3000/ch02_csv.csv",
    },
    {
        chartID: 'CH03',
        chartTitle: 'Bar chart on polar axis',
        library: 'matplotlib',
        CSV_FILE_URL: "http://localhost:3000/ch03_csv.csv",
    },
    {
        chartID: 'CH04',
        chartTitle: 'Bubble',
        library: 'chartjs',
        CSV_FILE_URL: "http://localhost:3000/ch04_csv.csv",
    },
    {
        chartID: 'CH05',
        chartTitle: 'Scatter',
        library: 'chartjs',
        CSV_FILE_URL: "http://localhost:3000/ch05_csv.csv",
    }];