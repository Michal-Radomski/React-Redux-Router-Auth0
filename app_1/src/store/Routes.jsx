import React from "react";
import {Router, Route, Switch, Redirect} from "react-router";

// import Component2 from "../functional/Component2";
// import Component3 from "../functional/Component3";
import Component4 from "../functional/Component4";
import Container1 from "../containers/Container1";
import Header from "../containers/Header";
import history from "../utils/history";
import Callback from "../functional/Callback";
import Container6 from "../containers/Container6";
import ProtectedRoute from "../functional/ProtectedRoute";
import UnAuthRedirect from "../functional/UnAuthRedirect";

import Auth0 from "../utils/auth0";
import Auth0Check from "../utils/Auth0Check";

const auth0 = new Auth0();

const handleAuthentication = (props) => {
  if (props.location.hash) {
    auth0.handleAuth();
  }
};

const PrivateRoute = ({component: Component, auth0}) => (
  <Route
    render={(props) =>
      auth0.isAuthenticated() === true ? <Component auth0={auth0} {...props} /> : <Redirect to={{pathname: "/redirect"}} />
    }
  />
);

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header auth0={auth0} />
            <Switch>
              <Route path="/" exact={true} component={Container1} />
              {/* <Route path="/Component4" component={Component4} /> */}
              {/* <Route path="/Component4" render={(props) => <Component4 {...props} />} /> */}
              <Route path="/Component/:id" render={(props) => <Component4 {...props} />} />
              {/* <Route path="/Component4" render={() => <div>Component4</div>} /> */}
              {/* <Route path="/Component2" component={Component2} /> */}
              {/* <Route path="/Component3" component={Component3} /> */}
              <Route
                path="/callback"
                render={(props) => {
                  handleAuthentication(props);
                  return <Callback />;
                }}
              />
              <Route path="/container6" render={() => <Container6 auth0={auth0} />} />
              <Route path="/auth0check" render={() => <Auth0Check auth0={auth0} />} />
              <Route path="/redirect" component={UnAuthRedirect} />
              <PrivateRoute path="/privateroute" auth0={auth0} component={ProtectedRoute} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;
