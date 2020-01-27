import React, { Component } from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

import { Button } from "reactstrap";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown",
      darkMode: true
    };
  }
  handleClick = () => {
    if (this.state.classes === "dropdown") {
      this.setState({ classes: "dropdown show" });
    } else {
      this.setState({ classes: "dropdown" });
    }
  };
  handleActiveMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    });
    document.body.classList.toggle("white-content");
  };
  render() {
    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
