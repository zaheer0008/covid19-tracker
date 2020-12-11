import wrapPromise from './wrapPromise'

const globalStatsUrl = 'https://disease.sh/v3/covid-19/all'
const countryStatsUrl = 'https://disease.sh/v3/covid-19/countries/pk'
const AllCountriesUrl = 'https://restcountries.eu/rest/v2/all'

function fetchGlobalStats(){
    let promise = fetch(globalStatsUrl)
        .then((res) => res.json())
        return wrapPromise(promise)
}

function fetchAllCountries(){
    let promise = fetch(AllCountriesUrl)
        .then((res)=>res.json())
        return wrapPromise(promise)
}

export {fetchGlobalStats, fetchAllCountries}