import React, { Component } from "react";

export default class ChatCard extends Component {
  render() {
    return (
      <div className="ChatCard" onClick={() => this.props.proceedToMessanger(this.props.chatData)}>
        <i className={this.props.chatData.background + " ChatCard__icon"}>
          {this.props.chatData.name[0].toLowerCase()}
        </i>
        <div className="ChatCard_data">
          <p className="ChatCard_data__name">{this.props.chatData.name}</p>
          <p className="ChatCard_data__members">
            {this.props.chatData.members.map((member, i, arr) => {
              return (
                <span>
                  {(arr.length - 1 === i) ? (member.name + ".") : (member.name + ", ")}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    );
  }
}
