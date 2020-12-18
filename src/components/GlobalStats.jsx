import {fetchGlobalStats, fetchGlobalTimeSeries} from '../api/endpoints'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const resource = fetchGlobalStats();

function GlobalStats() {
    const stats = resource.read();

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

  return (
    <Container maxWidth="md">
      <h2>World Totals:</h2>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.cases}>Total Cases<p> <strong>{stats.cases}</strong> </p></Paper>
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
    </Container>
  )
}

export default GlobalStats  

