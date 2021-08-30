import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveName(e) {
    localStorage["name"] = e.target.value;
  }

  isValidInput = () => {
    let input = localStorage.getItem("name")
    if (input.length < 2) return false 
    else return true
  }

  navigate = () => {
    if(this.isValidInput()){

      this.props.history.push("/contact");
    }else {
      alert('Name not valid')
    }
  }

  render() {
    return (
      <div>
        <h1> About</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="name"
          onBlur={this.saveName}
        />
        <button onClick={this.navigate}>navigate</button>
      </div>
    );
  }
}
