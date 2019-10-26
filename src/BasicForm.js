import React, { Component } from "react";

class BasicFormDetails extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">Basic Form Details</h1>

        <form className="form-group container">
          <label>Name:</label>
          <input type="text" className="form-control" />
        </form>
      </div>
    );
  }
}
export default BasicFormDetails;
