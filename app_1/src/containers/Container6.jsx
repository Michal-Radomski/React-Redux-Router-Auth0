import React, {Component} from "react";
import {connect} from "react-redux";

import * as ACTIONS from "../store/actions/actions";
// import Auth0 from "../utils/auth0";

// const auth0 = new Auth0();

class Container6 extends Component {
  render() {
    const user_text = "text 1";

    return (
      <div>
        <br />
        {/* <button onClick={() => auth0.login()}>LogIn</button> */}
        {/* <button onClick={() => this.props.auth0.login()}>LogIn</button> */}
        <br />
        {/* <button onClick={() => console.log(this.props.stateprop1, this.props.user_text)}>Get State</button> */}
        {/* <button onClick={() => console.log(this.props.stateprop1, this.props.user_profile)}>Get State</button> */}
        <button onClick={() => console.log(this.props.stateprop1, this.props.is_authenticated)}>Get State</button>
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
    user_profile: state.auth0_reducer.profile,
    is_authenticated: state.auth0_reducer.is_authenticated,
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
