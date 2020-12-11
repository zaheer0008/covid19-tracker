import logo from './logo.svg';
import './App.css';
import GlobalStats from './components/GlobalStats';
import { Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary'
import CountryDropdown from './components/CountryDropdown';
import { Container } from '@material-ui/core';
import CountryStats from './components/CountryStats';

function App() {
  return (
    <Container maxWidth="md"> 
      <Suspense fallback={<h2>Loading Global Data</h2>}>
        <ErrorBoundary>
          <GlobalStats />
          <CountryDropdown />
          <CountryStats />
        </ErrorBoundary>
      </Suspense>
    </Container>
  );
}

export default App;
