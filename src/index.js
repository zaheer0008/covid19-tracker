import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />;
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />;

const rootElement = document.getElementById("root");
// Opt into Concurrent Mode
// ReactDOM.unstable_createRoot(rootElement).render(<App />)
ReactDOM.render(<App />,rootElement);

