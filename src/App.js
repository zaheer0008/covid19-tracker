import logo from './logo.svg';
import './App.css';
import GlobalStats from './components/GlobalStats';
import { Container } from '@material-ui/core';
import CountryStats from './components/CountryStats';
import { Suspense, useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { fetchCountryData } from './api/endpoints';
import { AppHeader } from "./components/AppHeader";

function App() {
  const [countryName, setCountryName] = useState("Afghanistan");
  var src = fetchCountryData(countryName);
  const ChangeAction = ()=>{
    let name = document.getElementById("ddlSelectCountry").value;
    setCountryName(name);
  }
  
  return (
    <Container className="spinner-grow text-light" maxWidth="md">
      <AppHeader />
      <h1>Realtime statistics about the covid-19 pandaemic situation.</h1>
      <ErrorBoundary>
      <Suspense fallback={<div className="loader"></div>}>
          <GlobalStats />
          <canvas id="GlobalChart" width="400" height="400" aria-label="Global Time Series Data" role="img">
          
          </canvas>
      </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
      <Suspense fallback={<div>Loading....</div>}>
        <CountryStats onCountryChange={ChangeAction} resource= {src} />
      </Suspense>
      </ErrorBoundary>
      <canvas id="CountryChart" width="400" height="400" aria-label="Country Time Series Data" role="img">
            
      </canvas>
    </Container>
  );
  
}


export default App;
