import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/index.css";
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';

import { ShowState } from "./context/ShowContext";
import { AlertState } from "./context/AlertContext";

ReactDOM.render(
  <React.StrictMode>
    <ShowState>
      <AlertState>
        <App />
      </AlertState>
    </ShowState>
  </React.StrictMode>,
  document.getElementById("root")
);


// This For increse The Speed Of Reload Of The Page React From Throgh Add The Page In The Cach
registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();