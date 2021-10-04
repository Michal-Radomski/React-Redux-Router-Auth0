import React, {Component} from "react";
// import "./App.scss";
// import {styles2} from "./styles";
// import * as Styles2 from "./styles";
import Counter from "./Counter";
import Component2 from "./Component2";

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
      </div>
    );
  }
}

// const AppInstance = new App();
// console.log(AppInstance.name1);
// console.log(AppInstance);
// console.log(Component);

export default App;
