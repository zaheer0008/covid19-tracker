import React, { useState } from 'react';  
import CountryContext from '../context/CountryContext';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { CountryTimeSeriesChart } from "../CovidCharts";
import { fetchCountryData } from '../api/endpoints';

// var resource = fetchCountryData(countryNmae);
function CountryStats(props){
    const resource = props.resource;
    const response = resource.cTotals.read();
    const counteries =React.useContext(CountryContext)[0];
    const timeSeriesResult = props.resource.cTimeSeriesData.read();
    CountryTimeSeriesChart(document.getElementById("CountryChart").getContext('2d'), timeSeriesResult, props.countryName);
    
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      cases: {
        padding: theme.spacing(2),
        textAlign: 'center',        
        color: 'white',
        borderRadius: '20px',
        background: 'DarkOrchid', 
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