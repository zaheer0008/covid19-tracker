import Chart from "chart.js";
import { useState } from "react";
import { fetchGlobalTimeSeries } from "../api/endpoints";


function GlobalTimeSeriesData() {
    // GetData(setCases)
  return (
      <canvas id="myChart" width="400" height="400" aria-label="Hello ARIA World" role="img">
            
      </canvas>
  );
}

window.onload = function(){
    var ctx = document.getElementById('myChart').getContext("2d");
    var myChart = new Chart(ctx, {
      type: 'line',  
      data: {
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
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
    });
    GetData(myChart);
    // addData(myChart,Object.keys(cases),Object.values(cases));
    }

    function GetData(myChart) {

        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
        .then((res)=>res.json())
        .then((data)=>{
            var dates =  Object.keys(data.cases);
            var activeCases = Object.values(data.cases);
            var recovered = Object.values(data.recovered);
            var deaths = Object.values(data.deaths);
            const AllData = new Array(activeCases, recovered, deaths);
            console.log(AllData);
            addData(myChart,dates,AllData);
        })
    }

    function addData(chart, label, data) {
        chart.data.labels = label;
        
        chart.data.datasets.forEach((dataset,i) => {
            dataset.data = data[i]; 
        });
        chart.update();
    }

export default GlobalTimeSeriesData;