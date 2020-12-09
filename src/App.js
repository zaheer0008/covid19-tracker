import logo from './logo.svg';
import './App.css';
import GlobalStats from './components/GlobalStats';
import { Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <div className="App">
      <h2>Global Statistics</h2>
      <Suspense fallback={<h2>Loading Global Data</h2>}>
        <ErrorBoundary>
          <GlobalStats />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;
