import fetchGlobalStats from '../api/endpoints'

const resource = fetchGlobalStats()

function GlobalStats() {
    const stats = resource.read()

  return (
    <div className="global">
        <div className="Cases">
        Total Cases:<p> {stats.cases}</p>
        </div>
        <div className="Recovered">
        Recovered:<p> {stats.recovered}</p>
        </div>
        <div className="Deaths">
        Deaths:<p> {stats.deaths}</p>
        </div>
        <p> {console.log(stats)}</p>
    </div>
  )
}

export default GlobalStats  

