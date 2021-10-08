import React, {useReducer} from "react";
import Routes from "./routes";
import Context from "./utils/Context";
import * as Reducer from "./store/hooksState/hooksReducer";
import * as ACTIONS from "./store/actions/actions";
import * as FormReducer from "./store/hooksState/userFormReducer";

const App = () => {
  const [stateGlobal, setStateGlobal] = React.useState(0);

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState);
  const [stateForm, dispatchForm] = useReducer(FormReducer.FormReducer, FormReducer.initialState);

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

  const handleUseContextChange = (event) => {
    dispatchForm(ACTIONS.user_input_change(event.target.value));
  };

  const handleUseContextSubmit = (event) => {
    event.preventDefault();
    event.persist();
    dispatchForm(ACTIONS.user_input_submit(event.target.useContext.value));
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
          useContextChange: stateForm.user_text_change,
          useContextSubmit: stateForm.user_text_submit,
          useContextHandleChange: (event) => handleUseContextChange(event),
          useContextHandleSubmit: (event) => handleUseContextSubmit(event),
        }}
      >
        {/* {console.log(stateForm)} */}
        <Routes />
      </Context.Provider>
      {/* {console.log(stateGlobal)}
      {console.log(stateContextGlobal)} */}
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
