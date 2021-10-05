import React, {Component} from "react";
// import Component1 from "../functional/Component1";

class Container2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateprop2: "Initial state2",
      stateprop2a: 5,
    };
  }

  // changeState = () => {
  //   this.setState((prevState, props) => ({
  //     stateprop2a: prevState.stateprop2a + 1,
  //   }));
  // };
  changeState = () => {
    this.setState({
      stateprop2a: this.state.stateprop2a + 1,
      stateprop2: this.state.stateprop2 + "L",
    });
  };
  changeState2 = () => {
    this.setState({
      stateprop2: this.state.stateprop2 + "L",
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.changeState()}>Change State</button>
        <br />
        {this.state.stateprop2a}
        <br />
        <button onClick={() => this.changeState2()}>Change State2</button>
        <br />
        {this.state.stateprop2}
        <br />
        {/* //- Not recommended */}
        {/* <Component1 prop1={this.state.stateprop2} /> */}
      </div>
    );
  }
}

export default Container2;
