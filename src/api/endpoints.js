import wrapPromise from './wrapPromise';
import React from 'react';
import CountryContext from "../context/CountryContext";

const globalStatsUrl = 'https://disease.sh/v3/covid-19/all';
const countryStatsUrl = 'https://disease.sh/v3/covid-19/countries/';
const countryTimeSeriesUrl = "https://disease.sh/v3/covid-19/historical/";
const globalTimeSeries = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";

function fetchGlobalStats(){
    let totalsPromise = fetchGlobalTotals();
    let timeSeriesPromise = fetchGlobalTimeSeries();

    return {
        totals: wrapPromise(totalsPromise),
        timeSeriesData: wrapPromise(timeSeriesPromise),
    };
}

function fetchGlobalTotals() {
    console.log("fetching global totals....");
    let promise = fetch(globalStatsUrl)
        .then((res) => res.json())
        return promise;
}
function fetchGlobalTimeSeries(){
    console.log("fetching global time series....");
    let promise = fetch(globalTimeSeries)
        .then((res) => res.json())
        return promise;
}

function fetchCountryData(name) {
    let countryTotals = fetchCountryTotals(name);
    let countryTimeSeries = fetchCountryTimeSeries(name);

    return {
        cTotals: wrapPromise(countryTotals),
        cTimeSeriesData: wrapPromise(countryTimeSeries)
    };
}

function fetchCountryTotals(name) {
    console.log("fetching country totals for "+ name);
    let promise = fetch(countryStatsUrl+name)
    .then((res)=> (res.json()))

    return promise;
}

function fetchCountryTimeSeries(name) {
    console.log("fetching country time series data for "+ name);
    let promise = fetch(countryTimeSeriesUrl+name+"?lastdays=all")
        .then((res)=> res.json());

    return promise;
}

export {fetchGlobalStats,fetchCountryData}