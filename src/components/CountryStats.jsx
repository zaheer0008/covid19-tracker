import React, { useState } from 'react';  
import {fetchAllCountries} from '../api/endpoints';
import CountryContext from '../context/CountryContext';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const countryResource = fetchAllCountries();
var countryStatsUrl = 'https://disease.sh/v3/covid-19/countries/';


function CountryStats(){
    const [response, setResponse] = useState({});
    const counteries =React.useContext(CountryContext)[0];

    const ChangeAction = ()=>{
        let name = document.getElementById("ddlSelectCountry").value;
        console.log("fetching for "+name );
        fetch(countryStatsUrl+name)
        .then((res)=>res.json())
        .then((res)=>{
            setResponse(res);
            console.log(res);
        })
    }
    
    return(
        // <CountryContext.Provider>
            <Container maxWidth='md'>
                <div>
                    <h2>Please select country to view data.</h2>
                    <select id="ddlSelectCountry" onChange={ChangeAction}>
                        {counteries.map((country)=>(
                            <option key={country.name} value={country.name}> {country.name} </option>
                        ))}
                    </select>
                </div>
                <h3 className="error">{response.message}</h3>
                <Grid container spacing={3}>
                    <Grid item xs>
                    <Paper>Total Cases:<p> <strong>{response.cases}</strong> </p></Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper>Total Recovered:<p><strong> {response.recovered}</strong></p></Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper>Total Deaths:<p><strong> {response.deaths} </strong></p></Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>
                    <Paper>Today Cases:<p><strong> {response.todayCases} </strong></p></Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper>Today Recovered:<p><strong> {response.todayRecovered}</strong></p></Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper>Today Deaths:<p><strong> {response.todayDeaths}</strong></p></Paper>
                    </Grid>
                </Grid>
                
            </Container>
        // </CountryContext.Provider>
    )
}

export default CountryStats