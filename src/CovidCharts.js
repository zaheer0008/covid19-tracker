import Chart from "chart.js";

var tChartData = {
    // labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
        label: 'Confirmed Cases',
        // data: [12,50,30,],
        hoverBackgroundColor: 'pink',
        borderWidth: 1,
        fill: false,
        borderColor: 'cyan'
    },
    {
        label: 'Recovered',
        // data: [12,50,30,],
        hoverBackgroundColor: 'LimeGreen',
        borderWidth: 1,
        fill: false,
        borderColor: 'ForestGreen'
    },
    {
        label: 'Deaths',
        // data: [12,50,30,],
        hoverBackgroundColor: 'Fuchsia',
        borderWidth: 1,
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
    }
};

function CountryTimeSeriesChart(ctx, name) {
    var timeSeriesChart = new Chart(ctx, {
        type: 'line',
        data: tChartData,
        options: tChartOptions
    });
    GetTimeSeriesDataCountry(timeSeriesChart, name);
};

function GlobalTimeSeriesChart(ctx) {
    var timeSeriesChart = new Chart(ctx, {
        type: 'line',
        data: tChartData,
        options: tChartOptions
    });
    GetTimeSeriesDataGlobal(timeSeriesChart);
};

function GetTimeSeriesDataCountry(chart, name) {
    console.log("fetching time series data for "+name);
    fetch("https://disease.sh/v3/covid-19/historical/"+name+"?lastdays=all")
        .then((res) => res.json())
        .then((data) => {
            var dates = Object.keys(data.timeline.cases);
            var activeCases = Object.values(data.timeline.cases);
            var recovered = Object.values(data.timeline.recovered);
            var deaths = Object.values(data.timeline.deaths);
            const AllData = new Array(activeCases, recovered, deaths);
            console.log(AllData);
            addTimeSeriesData(chart, dates, AllData);
        })
}

function GetTimeSeriesDataGlobal(chart) {

    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
        .then((res) => res.json())
        .then((data) => {
            var dates = Object.keys(data.cases);
            var activeCases = Object.values(data.cases);
            var recovered = Object.values(data.recovered);
            var deaths = Object.values(data.deaths);
            const AllData = new Array(activeCases, recovered, deaths);
            console.log(AllData);
            addTimeSeriesData(chart, dates, AllData);
        })
}

function addTimeSeriesData(chart, label, data) {
    chart.data.labels = label;

    chart.data.datasets.forEach((dataset, i) => {
        dataset.data = data[i];
    });
    chart.update();
}

export { CountryTimeSeriesChart, GlobalTimeSeriesChart }