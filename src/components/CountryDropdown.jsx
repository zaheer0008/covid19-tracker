
import React from 'react';
import CountryContext from "../context/CountryContext";
import CountryStats from './CountryStats';
import { fetchCountryData } from "../api/endpoints";
import { Suspense, useState } from 'react';

function CountryDropdown(props) {
    const [countryName, setCountryName] = useState("Afghanistan");
    var src = fetchCountryData(countryName);
    const ChangeAction = () => {
        let name = document.getElementById("ddlSelectCountry").value;
        setCountryName(name);
    }

    const counteries = React.useContext(CountryContext)[0];
    var flagUrl = (counteries.find(o => o.name === countryName)).flag;
    return (
        <div>
            <h2>Please select country to view data.</h2>
            <select id="ddlSelectCountry" onChange={ChangeAction} >
                {counteries.map((country) => (
                    <option key={country.name} value={country.name}> {country.name} </option>
                ))}
            </select>
            <p><img src={flagUrl} alt="flag" width="40" height="20" /></p>
            <Suspense fallback={<div>Loading...</div>}>
            <CountryStats onCountryChange={ChangeAction} countryName={countryName} resource= {src} />
            </Suspense>
        </div>
    )
}



export default CountryDropdown;