import React, {Component} from "react";

class Container3 extends Component {
  render() {
    // return false ? <div>Condition1a</div> : <div>Condition2a</div>;
    //- Nested Ternary Expression
    return false ? (
      false ? (
        <div>Condition1</div>
      ) : (
        <div>Condition2</div>
      )
    ) : true ? (
      <div>Condition3</div>
    ) : (
      <div>Condition4</div>
    );
  }
}

export default Container3;

// import React, {Component} from "react";

// class Container3 extends Component {
//   render() {
//     if (!true) {
//       return <div>Condition1</div>;
//     } else {
//       return <div>Condition2</div>;
//     }
//   }
// }

// export default Container3;
