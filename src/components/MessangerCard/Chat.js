import React, { Component } from "react";
import { connect } from "react-redux";

class Chat extends Component {
  render() {
    const {
      messages,
      currentUser,
      profilePicture,
      senderProfilePicture
    } = this.props;
    return (
      <div className="Chat">
        {messages.map(message => {
          if (message.sender === currentUser) {
            return (
              <div className="sentWrapper">
                <div className="sent">
                  <img src={profilePicture} alt="" className="received__img" />
                  <p className="sentMsg">{message.msg}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="receivedWrapper">
                <div className="received">
                  <div>
                    <p className="sender">{message.sender}</p>
                    <p className="senderMsg">{message.msg}</p>
                  </div>
                  <img
                    src={senderProfilePicture}
                    alt=""
                    className="sent__img"
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.users[0].inbox,
    currentUser: state.users[0].firstName,
    profilePicture: state.users[0].profilePicture,
    senderProfilePicture: state.users[1].profilePicture
  };
}

export default connect(mapStateToProps)(Chat);
