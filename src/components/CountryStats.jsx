import {fetchAllCountries} from '../api/endpoints'
const countryResource = fetchAllCountries()
function CountryStats(){
    const counteries = countryResource.read()
    return(
        <h2>selected country is: {document.getElementById("ddlSelectCountry").selectedvalue}</h2>
    )
}

export default CountryStats