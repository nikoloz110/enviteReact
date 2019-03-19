import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Social extends Component {
  render() {
    return (
      <div className="Social">
        <div className="social__icon">
        <FontAwesomeIcon
          icon={this.props.icon}
          style={this.props.style}
          size={this.props.size}
        />
        </div>
        <p className="social__name">{this.props.text}</p>
        <FontAwesomeIcon
          icon={["fas", "angle-right"]}
          style={{ color: "#a3a3a3" }}
          size="lg"
        />
      </div>
    );
  }
}
