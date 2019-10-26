import React, { Component } from "react";
import ReactDOM from "react-dom";
import BasicForm from "./BasicForm";
import Address from "./Address";

class Submit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Form Submitted Successfully</h1>
      </div>
    );
  }
}

export default Submit;
