import React, { Component } from "react";
import Address from "./Address.js";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class BasicFormDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: " ",
      lastName: " ",
      age: 0,
      mobile: 0
    };
  }

  firstName = e => {
    this.setState({ firstName: e.target.value });
  };

  lastName = e => {
    this.setState({ lastName: e.target.value });
  };

  age = e => {
    this.setState({ age: e.target.value });
  };

  mobile = e => {
    this.setState({ mobile: e.target.value });
  };

  data = e => {
    if (
      this.state.firstName !== " " &&
      this.state.lastName !== " " &&
      this.state.age !== 0 &&
      this.state.Mobile !== 0
    ) {
      this.props.nextStep();
    } else {
      alert("fill all fields");
      e.preventDefault();
    }
  };

  render() {
    return (
      <div>
        <h1 className="heading">Basic Form Details</h1>

        <form className="form-group container" onSubmit={this.data}>
          <br />
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.firstName}
            onChange={this.firstName}
          />
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.lastName}
            onChange={this.lastName}
          />
          <br />
          <label>Age:</label>
          <input
            type="number"
            className="form-control"
            value={this.state.age}
            onChange={this.age}
          />
          <br />
          <label>Mobile Number:</label>
          <input
            type="number"
            className="form-control"
            value={this.state.mobile}
            onChange={this.mobile}
          />
          <button className="btn btn-lg">Next</button>
        </form>
      </div>
    );
  }
}
export default BasicFormDetails;
