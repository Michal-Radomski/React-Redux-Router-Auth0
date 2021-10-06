import React from "react";
import {Router, Route, Switch} from "react-router";

// import Component2 from "../functional/Component2";
// import Component3 from "../functional/Component3";
import Component4 from "../functional/Component4";
import Container1 from "../containers/Container1";
import Header from "../containers/Header";
import history from "../utils/history";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact={true} component={Container1} />
              {/* <Route path="/Component4" component={Component4} /> */}
              {/* <Route path="/Component4" render={(props) => <Component4 {...props} />} /> */}
              <Route path="/Component/:id" render={(props) => <Component4 {...props} />} />
              {/* <Route path="/Component4" render={() => <div>Component4</div>} /> */}
              {/* <Route path="/Component2" component={Component2} /> */}
              {/* <Route path="/Component3" component={Component3} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;
