import React, { Component } from "react";
import AddparticipantHeader from './AddparticipantHeader';
import Social from './Social'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Addparticipant extends Component {
  render() {
    return (
      <div className={this.props.addParticipantsAnimation + " AddparticipantCard"}>
        <div className="swipeBar swipeBar--2" onClick={this.props.closeAddParticipants}>
          <hr className="swipeBar-2__hr" />
          <hr className="swipeBar-2__hr" />
          <hr className="swipeBar-2__hr" />
        </div>
        <AddparticipantHeader />
        <div className="socials">
            <Social icon={["fab", "facebook-f"]} style={{ color: "#4360aa" }} size="lg" text="Facebook"/>
            <Social icon={["fas", "paper-plane"]} style={{ color: "#31a3d3" }} size="lg" text="Telegram"/>
            <Social icon={["fab", "whatsapp"]} style={{ color: "#78cd6d" }} size="lg" text="Whatsapp"/>
            <Social icon={["fas", "envelope"]} style={{ color: "#58e2c2" }} size="lg" text="Email"/>
        </div>
      </div>
    );
  }
}