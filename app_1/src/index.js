// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// -Globalne dostarczenie store do aplikacji
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {Provider} from "react-redux";
import {createStore} from "redux";

import rootReducer from "./store/reducers/index";

const Store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
