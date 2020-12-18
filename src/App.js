import logo from './logo.svg';
import './App.css';
import GlobalStats from './components/GlobalStats';
import { Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary'
import { Container } from '@material-ui/core';
import CountryStats from './components/CountryStats';
import GlobalTimeSeriesData from "./components/GlobalTimeSeriesData";

function App() {
  return (
      <Container className="spinner-grow text-light" maxWidth="md">
        <Suspense fallback={<h2>Loading Global Data</h2>}>
          <ErrorBoundary>
            <GlobalStats />
              
          </ErrorBoundary>
        </Suspense>
              <GlobalTimeSeriesData />
                <CountryStats />
      </Container> 
  );
}



export default App;
