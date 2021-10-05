import React, {Component} from "react";

class Container1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateprop1: "Initial state",
    };
  }

  // Correct way [don't change directly]
  changeState() {
    this.setState({stateprop1: "New State"});
  }

  render() {
    return (
      <div>
        {this.props.nickname}
        <br />
        <button onClick={() => this.changeState()}>Change State</button>
        <button onClick={() => this.setState({stateprop1: "New State2"})}>Change State2</button>
        <br />
        {this.state.stateprop1}

        {/* {console.log(this.state.stateprop1)} */}
      </div>
    );
  }
}

export default Container1;
