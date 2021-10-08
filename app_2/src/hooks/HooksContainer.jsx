import React, {useEffect, useReducer, useContext} from "react";
import * as Reducer from "../store//hooksState/hooksReducer";
import * as ACTIONS from "../store/actions/actions";
import Context from "../utils/Context";

const HooksContainer = () => {
  const [stateValue, setValue] = React.useState(0);
  // - Other way
  // const stateValue=React.useState(0)[0]
  // const setValue=React.useState(0)[1]

  const context = useContext(Context);

  const [useEffectValue, setUseEffectValue] = React.useState(null);

  const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState);

  useEffect(() => {
    setTimeout(() => setUseEffectValue("useEffect Worked"), 3000);
  }, []);

  const incrementValue = () => {
    setValue(stateValue + 1);
  };

  const decrementValue = () => {
    setValue(stateValue - 1);
  };

  const changeUseEffectValue = () => {
    setUseEffectValue("Some String");
  };

  const handleDispatchTrue = () => {
    dispatch(ACTIONS.success());
    // -Other way
    // dispatch(ACTIONS.SUCCESS)
  };

  const handleDispatchFalse = () => {
    dispatch(ACTIONS.failure());
  };

  return (
    <div>
      HooksContainer
      <br />
      <button onClick={() => incrementValue()}>Increment</button>
      <button onClick={() => decrementValue()}>Decrement</button>
      <button onClick={() => setValue(0)}>Reset</button>
      <br />
      <button onClick={() => changeUseEffectValue()}>Change Use Effect</button>
      <button onClick={() => handleDispatchTrue()}>HandleDispatchTrue</button>
      <button onClick={() => handleDispatchFalse()}>HandleDispatchFalse</button>
      <br />
      <button onClick={() => context.addGlobalValue()}>Add Global Value</button>
      <button onClick={() => context.removeGlobalValue()}>Remove Global Value</button>
      <button onClick={() => context.resetGlobalState()}>Reset Global Value</button>
      <br />
      <button onClick={() => context.dispatchContextTrue()}>Dispatch Context True</button>
      <button onClick={() => context.dispatchContextFalse()}>Dispatch Context False</button>
      <br />
      <div>
        <p>Local State: {stateValue}</p>
        <div>{useEffectValue ? <p>{useEffectValue}</p> : <p>No Value</p>}</div>
      </div>
      <br />
      <div>{state.stateprop1 ? <p>State prop1 is true</p> : <p>State prop1 is false</p>}</div>
      <br />
      <p>Global State: {context.valueGlobalState}</p>
      <br />
      <div>{context.reducerGlobalState ? <p>State prop2 is true</p> : <p>State prop2 is false</p>}</div>
      <br />
      <p>Global State of Form:</p>
      <div>{context.useContextSubmit ? <p>{context.useContextSubmit}</p> : <p>No User Text</p>}</div>
      <br />
    </div>
  );
};

export default HooksContainer;
