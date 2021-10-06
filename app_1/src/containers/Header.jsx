import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
  state = {
    nums: [{id: 1}, {id: 2}, {id: 3}],
  };

  render() {
    return (
      <div>
        <Link to="/" style={{padding: "5px"}}>
          Home
        </Link>
        {this.state.nums.map((num) => (
          <Link key={num.id} to={{pathname: "/component/" + num.id}} style={{padding: "5px"}}>
            Component {num.id}
          </Link>
        ))}
        {/* <Link to="/Component4" style={{padding: "5px"}}>
            Component4
          </Link>

        <Link to="/Component2" style={{padding: "5px"}}>
          Component2
        </Link>
        <Link to="/Component3" style={{padding: "5px"}}>
          Component3
        </Link> */}
      </div>
    );
  }
}

export default Header;
