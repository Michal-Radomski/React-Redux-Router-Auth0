import React, {useReducer} from "react";
import Routes from "./routes";
import Context from "./utils/Context";
import * as Reducer from "./store/hooksState/hooksReducer";
import * as ACTIONS from "./store/actions/actions";

const App = () => {
  const [stateGlobal, setStateGlobal] = React.useState(0);

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState);

  const incrementGlobalState = () => {
    setStateGlobal(stateGlobal + 1);
  };

  const decrementGlobalState = () => {
    setStateGlobal(stateGlobal - 1);
  };

  const handleContextDispatchTrue = () => {
    dispatchContextGlobal(ACTIONS.success());
  };

  const handleContextDispatchFalse = () => {
    dispatchContextGlobal(ACTIONS.failure());
  };

  return (
    <div>
      React
      <Context.Provider
        value={{
          valueGlobalState: stateGlobal,
          addGlobalValue: () => incrementGlobalState(),
          removeGlobalValue: () => decrementGlobalState(),
          resetGlobalState: () => setStateGlobal(0),
          reducerGlobalState: stateContextGlobal.stateprop2,
          dispatchContextTrue: () => handleContextDispatchTrue(),
          dispatchContextFalse: () => handleContextDispatchFalse(),
        }}
      >
        <Routes />
      </Context.Provider>
      {console.log(stateGlobal)}
      {console.log(stateContextGlobal)}
    </div>
  );
};

export default App;

// import React, { Component } from 'react';
// import Routes from './routes';

// //main app
// class App extends Component {

//   render() {
//     return(
//       <div>
//       React
//       <Routes />
//       </div>
//     )}
// }

// export default App;
