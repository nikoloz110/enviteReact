import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class EnviteFriends extends Component {
  render() {
    return (
      <div className="EnviteFriends">
        <p className="EnviteFriends__eNvite">eNvite Your Friends</p>
        <p className="EnviteFriends__where">
          where's the best way to call your friends in?
        </p>
        <div className="EnviteFriends__icons">
          <span className="EnviteFriends__iconWrapper">
            <FontAwesomeIcon
              icon={["fab", "facebook-f"]}
              style={{ color: "#4360aa" }}
              size="lg"
            />
          </span>
          <span className="EnviteFriends__iconWrapper">
            <FontAwesomeIcon
              icon={["fas", "paper-plane"]}
              style={{ color: "#31a3d3" }}
              size="lg"
            />
          </span>
          <span className="EnviteFriends__iconWrapper">
            <FontAwesomeIcon
              icon={["fab", "whatsapp"]}
              style={{ color: "#78cd6d" }}
              size="lg"
            />
          </span>
          <span className="EnviteFriends__iconWrapper">
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              style={{ color: "#58e2c2" }}
              size="lg"
            />
          </span>
        </div>
      </div>
    );
  }
}
