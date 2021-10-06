import React, {Component} from "react";
import {connect} from "react-redux";

import * as ACTIONS from "../store/actions/actions";

class Container6 extends Component {
  render() {
    const user_text = "text 1";

    return (
      <div>
        <button onClick={() => console.log(this.props.stateprop1, this.props.user_text)}>Get State</button>
        <button onClick={() => this.props.action1()}>Set True</button>
        <button onClick={() => this.props.action2()}>Set False</button>
        <button onClick={() => this.props.action_creator1()}>Set True2 - creator</button>
        <button onClick={() => this.props.action_creator2()}>Set False2 - creator</button>
        <button onClick={() => this.props.action_creator3(user_text)}>Dispatch Action Creator 3</button>
        {this.props.user_text ? <h1>{this.props.user_text}</h1> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stateprop1: state.reducer1.stateprop1,
    user_text: state.user_reducer.user_text,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
    action_creator3: (text) => dispatch(ACTIONS.user_input(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container6);