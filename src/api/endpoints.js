import wrapPromise from './wrapPromise';
import React from 'react';
import CountryContext from "../context/CountryContext";

const globalStatsUrl = 'https://disease.sh/v3/covid-19/all'
const AllCountriesUrl = 'https://restcountries.eu/rest/v2/all'
const globalTimeSeries = "https://disease.sh/v3/covid-19/historical/all";

function fetchGlobalStats(){
    let promise = fetch(globalStatsUrl)
        .then((res) => res.json())
        return wrapPromise(promise)
}
function fetchGlobalTimeSeries(){
    let promise = fetch(globalTimeSeries)
        .then((res) => res.json())
        return wrapPromise(promise)
}

function fetchAllCountries(){
    let promise = fetch(AllCountriesUrl)
        .then((res)=>res.json())
        return wrapPromise(promise)
}

export {fetchGlobalStats, fetchAllCountries, fetchGlobalTimeSeries}