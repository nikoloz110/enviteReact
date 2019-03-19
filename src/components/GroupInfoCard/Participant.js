import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Participant extends Component {
  render() {
    const { name, lastName, profilePicture, isAdmin } = this.props.member;
    return (
      <div className="Participant" onClick={this.props.showShoppingBag}>
        <div className="Participant__leftWrapper">
          <img src={profilePicture} alt="" className="Participant__img" />
          {name + " " + lastName}
        </div>
        <div className="Participant__rightWrapper">
        <span className="Participant__admin">{isAdmin && "Admin"}</span>
        <button>
          <FontAwesomeIcon
            icon={["fas", "angle-right"]}
            style={{ color: "#a3a3a3" }}
            size="lg"
          />
        </button>
        </div>
      </div>
    );
  }
}
