import React, {Component} from "react";

class Container5 extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({value: event.target.value});
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.name.value);
    // console.log(this.state.value);
    console.log(this.state.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input id="name" value={this.state.value} onChange={this.handleChange} type="text" />
          <button type="submit">Submit</button>
        </form>
        {/* {this.state.value} */}
      </div>
    );
  }
}

export default Container5;
