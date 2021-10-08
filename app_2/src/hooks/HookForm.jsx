import React, {useState, useReducer, useContext} from "react";
import * as ACTIONS from "../store/actions/actions";
import * as FormReducer from "../store/hooksState/userFormReducer";
import Context from "../utils/Context";

const HookForm = () => {
  const context = useContext(Context);

  const [valueChange, setValueChange] = useState("");
  const [valueSubmit, setValueSubmit] = useState("");

  const [userFormState, userFormDispatch] = useReducer(FormReducer.FormReducer, FormReducer.initialState);

  const handleUseStateChange = (event) => {
    setValueChange(event.target.value);
    // console.log(valueChange);
  };
  const handleUseStateSubmit = (event) => {
    event.preventDefault();
    setValueSubmit(event.target.useState.value);
  };

  const handleUseReducerChange = (event) => {
    userFormDispatch(ACTIONS.user_input_change(event.target.value));
  };

  const handleUseReducerSubmit = (event) => {
    event.preventDefault();
    userFormDispatch(ACTIONS.user_input_submit(event.target.useReducer.value));
  };

  return (
    <React.Fragment>
      <div>
        HookForm:
        <br />
        <hr />
        <br />
        <div>
          <form onSubmit={handleUseStateSubmit}>
            <label>React useState:</label>
            <input id="useState" type="text" onChange={handleUseStateChange} value={valueChange} />
            <button type="submit">Submit</button>
          </form>
          <div>
            <h2>React useState:</h2>
            <p>Change: {valueChange}</p>
            <p>Submit: {valueSubmit}</p>
          </div>
          <br />
          <hr />
          <br />
        </div>
        <div>
          <form onSubmit={handleUseReducerSubmit}>
            <label>React useReducer:</label>
            <input id="useReducer" type="text" onChange={handleUseReducerChange} />
            <button type="submit">Submit</button>
          </form>
          <div>
            <h2>React useReducer:</h2>
            <p>Change: {userFormState.user_text_change}</p>
            <p>Submit: {userFormState.user_text_submit}</p>
          </div>
          <br />
          <hr />
          <br />
        </div>
        <div>
          <form onSubmit={context.useContextHandleSubmit}>
            <label>React useContext:</label>
            <input id="useContext" type="text" onChange={context.useContextHandleChange} />
            <button type="submit">Submit</button>
          </form>
          <div>
            <h2>React useContext:</h2>
            <p>Change: {context.useContextChange}</p>
            <p>Submit: {context.useContextSubmit}</p>
          </div>
          <br />
          <hr />
          <br />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HookForm;
