import React, { Component } from "react";

class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      area: " ",
      statey: " ",
      country: " ",
      city: " ",
      pincode: 0
    };
  }

  change = input => e => {
    this.setState({ [input]: e.target.value });
  };

  data = e => {
    if (
      this.state.area !== " " &&
      this.state.statey !== " " &&
      this.state.country !== " " &&
      this.state.city !== " " &&
      this.state.pincode !== 0
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
        <h1 className="heading">Address Details</h1>

        <form className="form-group container" onSubmit={this.data}>
          <br />
          <label>Area/Street/Locality:</label>
          <input
            type="textarea"
            className="form-control"
            value={this.state.area}
            onChange={this.change("area")}
          />

          <br />
          <label>City:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.city}
            onChange={this.change("city")}
          />

          <br />
          <label>State:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.statey}
            onChange={this.change("statey")}
          />
          <br />
          <label>Country:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.country}
            onChange={this.change("country")}
          />

          <br />
          <label>Pin Code:</label>
          <input
            type="number"
            className="form-control"
            value={this.state.pincode}
            onChange={this.change("pincode")}
          />

          <button className="btn btn-lg">Submit</button>
        </form>
      </div>
    );
  }
}
export default Address;
