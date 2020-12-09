import wrapPromise from './wrapPromise'

const globalStatsUrl = 'https://disease.sh/v3/covid-19/all'

function fetchGlobalStats(){
    let promise = fetch(globalStatsUrl)
        .then((res) => res.json())
        return wrapPromise(promise)
}

export default fetchGlobalStats