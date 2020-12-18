import React, { useState } from 'react';  
import {fetchAllCountries} from '../api/endpoints';
import CountryContext from '../context/CountryContext';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
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
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      cases: {
        padding: theme.spacing(2),
        textAlign: 'center',        
        color: 'white',
        borderRadius: '20px',
        background: 'DarkOrchid', //'linear-gradient(45deg,  lightblue 30%, rgb(126, 190, 211) 50%)',
        '&:hover': {
          background: 'DarkMagenta',
        }
      },
      recovered: {
        padding: theme.spacing(2),
        textAlign: 'center',        
        color: 'white',
        borderRadius: '20px',
        background: 'LimeGreen',
        '&:hover': {
          background: 'ForestGreen',
        }
      },
      deaths: {
        padding: theme.spacing(2),
        textAlign: 'center',        
        color: 'white',
        borderRadius: '20px',
        background: 'HotPink',
        '&:hover': {
          background: 'Fuchsia',
        }
      },
    }));
    const classes = useStyles();
    
    return(
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
                    <Paper className={classes.cases}>Total Cases:<p> <strong>{response.cases}</strong> </p></Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper className={classes.recovered}>Total Recovered:<p><strong> {response.recovered}</strong></p></Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper className={classes.deaths}>Total Deaths:<p><strong> {response.deaths} </strong></p></Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>
                    <Paper className={classes.cases}>Today Cases:<p><strong> {response.todayCases} </strong></p></Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper className={classes.recovered}>Today Recovered:<p><strong> {response.todayRecovered}</strong></p></Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper className={classes.deaths}>Today Deaths:<p><strong> {response.todayDeaths}</strong></p></Paper>
                    </Grid>
                </Grid>
                
            </Container>
    )
}

export default CountryStats