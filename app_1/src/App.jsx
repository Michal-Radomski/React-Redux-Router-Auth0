import React, {Component} from "react";
// import "./App.scss";
// import {styles2} from "./styles";
// import * as Styles2 from "./styles";
import Counter from "./Counter";
import Component2 from "./Component2";
import Component1 from "./functional/Component1";
// import Container1 from "./containers/Container1";
import Container2 from "./containers/Container2";
import Container3 from "./containers/Container3";
import Container4 from "./containers/Container4";
import Container5 from "./containers/Container5";
// import Container6 from "./containers/Container6";
import Routes from "./store/Routes";

class App extends Component {
  // name1 = "Mich";
  render() {
    // const name2 = "Michal";
    // const styles = {border: "1px solid red", textAlign: "center", boxShadow: "2px 2px 6px"};
    return (
      <div>
        {/* React */}
        {/* {name2} and {this.name1} */}
        {/* {console.log(this)} */}
        {/* <button>Button1</button>
        <div style={styles}>Style</div>
        <hr />
        <div style={Styles2.styles2}>Style2</div>
        {console.log(<div />)} */}
        {/* {React.createElement("button", {className: "App"}, "React")} */}
        <Counter />
        <Component2 />
        <Component1 name="Mich" age="40" />
        {/* <Container1 nickname="Ojejku" /> */}
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <br />
        {/* <Container6 /> */}
        <Routes />
      </div>
    );
  }
}

// const AppInstance = new App();
// console.log(AppInstance.name1);
// console.log(AppInstance);
// console.log(Component);

export default App;
