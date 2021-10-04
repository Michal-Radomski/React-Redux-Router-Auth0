import React, {Component} from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({counter: 5});
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.increment()}>Increment</button>
        <div>Div 1 {this.state.counter}</div>
        <div>Div 2</div>
        <div>Div 3</div>
      </React.Fragment>
    );
  }
}

export default Counter;
