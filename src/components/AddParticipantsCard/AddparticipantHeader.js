import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class AddparticipantHeader extends Component {
  render() {
    return (
      <div className="AddparticipantHeader">
        <p className="AddparticipantHeading">eNvite Your Friends</p>
        <FontAwesomeIcon
            icon={["fas", "angle-right"]}
            style={{ color: "white" }}
            size="lg"
          />
      </div>
    )
  }
}
