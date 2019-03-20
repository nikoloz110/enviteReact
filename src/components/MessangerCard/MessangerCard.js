import React, { Component } from 'react'
import MessangerCard__Header from './MessangerCard__Header'
import MessageBox from './MessageBox'
import EnviteFriends from './EnviteFriends'
import Chat from './Chat'

export default class MessangerCard extends Component {
  
  render() {
    return (
      <div className={this.props.messangerAnimation + " MessangerCard"}>
        <div className="swipeBar swipeBar--2" onClick={this.props.closeMessanger}>
          <hr className="swipeBar-2__hr"/>
          <hr className="swipeBar-2__hr"/>
          <hr className="swipeBar-2__hr"/>
        </div>
        <MessangerCard__Header showGroupInfo={this.props.showGroupInfo}
          showNewGroup={this.props.showNewGroup} goBackMessanger={this.props.goBackMessanger}
        />
        {this.props.showNewGroup && <EnviteFriends />}
        {!this.props.showNewGroup && <Chat />}
        <MessageBox />
        {/* check for chatdata props if not present then render new view */}
        {/* {this.props.new && <EnviteFriends />} */}
        {/* conditional rendering <envite> or <chat>if state smth render chat else render start chat. condition depending whether you clicked + btn or chat card */}
      </div>
    )
  }
}
