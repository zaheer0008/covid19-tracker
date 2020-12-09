import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
// Opt into Concurrent Mode
ReactDOM.unstable_createRoot(rootElement).render(<App />)

// ReactDOM.render(
//   <App />,
//  rootElement
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
