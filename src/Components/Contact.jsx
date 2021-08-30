import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  savePhone(e) {
    localStorage["phone"] = e.target.value;
  }

  
  isValidInput = () => {
    let input = localStorage.getItem("phone")
    return /^[1-9]{9}$/.test(input)
  }

  navigate  = () => {
    if(this.isValidInput()){
      this.props.history.push("/finish");
    }else {
      alert('Invalid number')
    }
  }

  render() {
    return (
      <div>
        <h1> About</h1>
        <input
          type="text"
          placeholder="Enter your phone"
          className="phone"
          onBlur={this.savePhone}
        />
        <button onClick={this.navigate}>navigate</button>
      </div>
    );
  }
}
