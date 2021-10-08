import React, {useState, useReducer, useContext} from "react";

const HookForm = () => {
  const [valueChange, setValueChange] = useState("");
  const [valueSubmit, setValueSubmit] = useState("");

  const handleUseStateChange = (event) => {
    setValueChange(event.target.value);
    // console.log(valueChange);
  };
  const handleUseStateSubmit = (event) => {
    event.preventDefault();
    setValueSubmit(event.target.useState.value);
  };

  return (
    <React.Fragment>
      <div>
        HookForm:
        <form onSubmit={handleUseStateSubmit}>
          <label>React useState:</label>
          <input id="useState" type="text" onChange={handleUseStateChange} value={valueChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h2>React useState:</h2>
        <p>Change: {valueChange}</p>
        <p>Submit: {valueSubmit}</p>
      </div>
    </React.Fragment>
  );
};

export default HookForm;
