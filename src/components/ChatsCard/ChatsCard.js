import React, { Component } from "react";
import ChatCard from "./ChatCard";
import TabNavigation from "../TabNavigation/TabNavigation";
import PlusButton from "./PlusButton";
import arrow from "../../assets/icons/fIll104.png";
import { connect } from "react-redux";

class ChatsCard extends Component {
  render() {
    return (
      <div className={this.props.chatsAnimation + " ChatsCard"}>
        <div className="swipeBar swipeBar--1 swipeBar--1--2" onClick={this.props.closeChats}/>
        <img
          src={this.props.users.profilePicture}
          alt=""
          className="ChatsCard__profilePicture"
        />
        <p className="ChatsCard__p-1">Welcome {this.props.users.firstName}</p>
        <div className="ChatsCard__p__wrapper">
          <p className="ChatsCard__p-2">
            you're Almost ready to start your shopping date.
          </p>
        </div>
        <div className="ChatsCard__ChatsWrapper">
          <p className="ChatsCard__p-3">Shopiqa Chats</p>
          <div className="ChatsWrapper__chatsList">
            {this.props.users.chatList.map((Chat, i, arr) => {
              return (
                <ChatCard
                  key={Chat.id}
                  chatData={Chat}
                  proceedToMessanger={this.props.proceedToMessanger}
                />
              );
            })}
          </div>
          <div className="arrowWrapper">
            <p className="ChatsWrapper__NewJourney">
              <img src={arrow} alt="" className="ChatsWrapper__arrow" />
              New Shopping Journey
            </p>
          </div>
          <PlusButton
            proceedToMessanger={this.props.proceedToMessanger}
            showNewGroup={this.props.showNewGroup}
          />
        </div>
        <TabNavigation showProfile={this.props.showProfile}> </TabNavigation>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users[0]
  };
}

export default connect(mapStateToProps)(ChatsCard);
