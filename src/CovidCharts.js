import Chart from "chart.js";

var tChartData = {
    // labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
        label: 'Confirmed Cases',
        // data: [12,50,30,],
        hoverBackgroundColor: 'pink',
        borderWidth: 2,
        fill: false,
        borderColor: 'cyan'
    },
    {
        label: 'Recovered',
        // data: [12,50,30,],
        hoverBackgroundColor: 'LimeGreen',
        borderWidth: 2,
        fill: false,
        borderColor: 'ForestGreen'
    },
    {
        label: 'Deaths',
        // data: [12,50,30,],
        hoverBackgroundColor: 'Fuchsia',
        borderWidth: 2,
        fill: false,
        borderColor: 'HotPink'
    }]
};

var tChartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    elements: {
        point:{
            radius: 0
        }
    },
};

function CountryTimeSeriesChart(ctx, data, titleText) {
    var timeSeriesChart = new Chart(ctx, {
        type: 'line',
        data: tChartData,
        options: tChartOptions
    });
    timeSeriesChart.options.title = {display: true, text: "Historical data for "+titleText};
    var dates = Object.keys(data.timeline.cases);
    var activeCases = Object.values(data.timeline.cases);
    var recovered = Object.values(data.timeline.recovered);
    var deaths = Object.values(data.timeline.deaths);
    const AllData = new Array(activeCases, recovered, deaths);
    console.log(AllData);
    addTimeSeriesData(timeSeriesChart, dates, AllData);
};

function GlobalTimeSeriesChart(ctx, data) {
    var timeSeriesChart = new Chart(ctx, {
        type: 'line',
        data: tChartData,
        options: tChartOptions
    });
    var dates = Object.keys(data.cases);
    var activeCases = Object.values(data.cases);
    var recovered = Object.values(data.recovered);
    var deaths = Object.values(data.deaths);
    const AllData = new Array(activeCases, recovered, deaths);
    console.log(AllData);
    addTimeSeriesData(timeSeriesChart, dates, AllData);
};

function addTimeSeriesData(chart, label, data) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
    chart.data.labels=label;

    chart.data.datasets.forEach((dataset, i) => {
        dataset.data = data[i];
    });
    chart.update();
}

export { CountryTimeSeriesChart, GlobalTimeSeriesChart }