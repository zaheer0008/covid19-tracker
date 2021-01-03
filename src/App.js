import logo from './logo.svg';
import './App.css';
import GlobalStats from './components/GlobalStats';
import { Container } from '@material-ui/core';
import CountryStats from './components/CountryStats';
import { Suspense, useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { fetchCountryData } from './api/endpoints';
import { AppHeader } from "./components/AppHeader";
import CountryDropdown from './components/CountryDropdown';
import AppFooter from './components/AppFooter';

function App() {
  
  return (
    <Container maxWidth="md">
      <AppHeader />
      <h1 style={{textAlign: "center", color: 'tomato'  }}>Global Statistics</h1>
      <ErrorBoundary>
      <Suspense fallback={<div className="loader"></div>}>
          <GlobalStats />
          <canvas id="GlobalChart" width="400" height="250" aria-label="Global Time Series Data" role="img">
          
          </canvas><CountryDropdown />
      </Suspense>
      </ErrorBoundary>
      
      <canvas id="CountryChart" width="400" height="250" aria-label="Country Time Series Data" role="img">
            
      </canvas>
      <AppFooter />
      
    </Container>
  );
  
}


export default App;
