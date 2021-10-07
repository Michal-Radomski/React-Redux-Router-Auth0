import React, {Component} from "react";
import {connect} from "react-redux";

import history from "./history";
import * as ACTIONS from "../store/actions/actions";

class Auth0Check extends Component {
  componentDidMount() {
    if (this.props.auth0.isAuthenticated()) {
      this.props.login_success();
      history.replace("/Container6");
    } else {
      this.props.login_failure();
      history.replace("/Container6");
    }
  }

  render() {
    return <div></div>;
  }
}

//Todo: unfinished ?
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    login_success: () => dispatch(ACTIONS.login_success()),
    login_failure: () => dispatch(ACTIONS.login_failure()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth0Check);
