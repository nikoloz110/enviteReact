import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import groupIcon from '../../assets/icons/group2Copy2.png';
import settingIcon from '../../assets/icons/nounSetting1050013000000.png';


export default class MessageCardHeader extends Component {
  render() {
    return (
      <div className="MessageCardHeader">
        <button><img src={groupIcon} /></button>
        <p className="MessageCardHeader__p">
        {this.props.showNewGroup ? "New Group" : "It's all about the bag"}
        </p>
        <button><img src={settingIcon} onClick={!this.props.showNewGroup && this.props.showGroupInfo} /></button>      
      </div>
    )
  }
}
