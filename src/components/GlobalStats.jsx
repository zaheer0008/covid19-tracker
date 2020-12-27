import {fetchGlobalStats} from '../api/endpoints'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useState } from "react";
import { GlobalTimeSeriesChart } from "../CovidCharts";


 const resource = fetchGlobalStats();
function GlobalStats() {
    const stats = resource.totals.read();
    const timeSeriesResult = resource.timeSeriesData.read();
    GlobalTimeSeriesChart(document.getElementById("GlobalChart"), timeSeriesResult);

    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      cases: {
        padding: theme.spacing(1),
        textAlign: 'center',        
        color: 'white',
        borderRadius: '20px',
        background: 'DarkOrchid', 
        '&:hover': {
          background: 'DarkMagenta',
        }
      },
      recovered: {
        padding: theme.spacing(1),
        textAlign: 'center',        
        color: 'white',
        borderRadius: '20px',
        background: 'LimeGreen',
        '&:hover': {
          background: 'ForestGreen',
        }
      },
      deaths: {
        padding: theme.spacing(1),
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

  return (
      <div>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper elevation={3} className={classes.cases}>Total Cases<p> <strong>{stats.cases}</strong> </p></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.recovered}>Total Recovered<p><strong> {stats.recovered}</strong></p></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.deaths}>Total Deaths<p><strong> {stats.deaths} </strong></p></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.cases}>Today Cases<p><strong> {stats.todayCases} </strong></p></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.recovered}>Today Recovered<p><strong> {stats.todayRecovered}</strong></p></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.deaths}>Today Deaths<p><strong> {stats.todayDeaths}</strong></p></Paper>
        </Grid>
      </Grid>
      </div>
  )
}

export default GlobalStats  

