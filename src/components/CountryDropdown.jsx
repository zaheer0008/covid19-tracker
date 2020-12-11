import { Container } from '@material-ui/core';
import { useState } from 'react'
import {fetchAllCountries} from '../api/endpoints'
const countryResource = fetchAllCountries()


function CountryDropdown(){
    const counteries = countryResource.read()
    const [country, setCountry] = useState('');
    return(
        <Container maxWidth='md'>
            <div>
                <h2>Please select country to view data.</h2>
                <select id="ddlSelectCountry" onChange={(val)=>(setCountry(val))}>
                    {counteries.map((country,i)=>(
                        <option value={country.name}> {country.name} </option>
                    ))}
                </select>
            </div>
        </Container>
    )
}

export default CountryDropdown