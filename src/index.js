import React, { Component } from "react";
import ReactDOM from "react-dom";
import BasicForm from "./BasicForm";
import Address from "./Address";
import Submit from "./Submit";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      next: 1
    };
  }

  nextStep = () => {
    this.setState({ next: this.state.next + 1 });
  };

  render() {
    switch (this.state.next) {
      case 1:
        return (
          <div className="App">
            <BasicForm nextStep={this.nextStep} />
          </div>
        );

      case 2:
        return (
          <div className="App">
            <Address nextStep={this.nextStep} />
          </div>
        );

      default:
        return (
          <div className="App">
            <Submit />
          </div>
        );
    }
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
