import React from 'react'; 
import CountryContext from '../context/CountryContext'
import { fetchAllCountries, FetchCountryData } from "../api/endpoints";
import CountryStats from './CountryStats';

const countryResource = fetchAllCountries();
var countryStatsUrl = 'https://disease.sh/v3/covid-19/countries/';

const CountryDropdown=()=>{
    const counteries = countryResource.read();
    const [Country, setCountry] = React.useContext(CountryContext);

    const ChangeAction = ()=>{
        setCountry(Country.name = document.getElementById("ddlSelectCountry").value);
        alert(Country.data.cases);
        console.log("fetching for "+Country.name);
        let promise = fetch(countryStatsUrl+Country.name)
        .then((res)=>res.json())
        .then((res)=>{
            Country.data = res;
            console.log(res);
        })
    }
    
    return(
        // <CountryContext.Provider value={Country.name}>
                <div>
                    <h2>Please select country to view data.</h2>
                    <select id="ddlSelectCountry" onChange={ChangeAction}>
                        {counteries.map((country)=>(
                            <option key={country.numericCode} value={country.name}> {country.name} </option>
                        ))}
                    </select>
                </div>
        // </CountryContext.Provider>
    )
}

export default CountryDropdown;