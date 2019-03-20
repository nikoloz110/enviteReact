import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GroupInfoCardHeader from "./GroupInfoCardHeader";
import Participant from "./Participant";
import deleteIcon from "../../assets/icons/nounDelete2025414000000@2x.png";
import plusIcon from "../../assets/icons/group3@2x.png"

export default class GroupInfoCard extends Component {
  // conditinal rendering
  render() {
    // this.props.groupInfo  = this.props.groupInfo || ""

    const { name, members, background } = this.props.groupInfo;
    // this.props.groupInfo
    return (
      <div  className={this.props.groupInfoAnimation + " GroupInfoCard"}>
        <div className="swipeBar swipeBar--2" onClick={this.props.closeGroupInfo}>
          <hr className="swipeBar-2__hr" />
          <hr className="swipeBar-2__hr" />
          <hr className="swipeBar-2__hr" />
        </div>
        <GroupInfoCardHeader name={name} closeGroupInfo={this.props.closeGroupInfo} goBackGroupInfo={this.props.goBackGroupInfo}/>
        <p className="groupTitle">
          <div className="groupTitleWrapper">
            <i className={background + " GroupTitle__icon"}>
              {name[0].toLowerCase()}
            </i>
            {name}
          </div>
          <button>
            <FontAwesomeIcon
              icon={["fas", "angle-right"]}
              style={{ color: "#a3a3a3" }}
              size="lg"
            />
          </button>
        </p>
        <p className="participantsNumber">
        {members.length} PARTICIPANTS
        </p>
        <div className="participantWrapper">
        {members.map(member => {
          return (
            <Participant
              member={member}
              onClick={this.props.showShoppingBag}
              showShoppingBag = {this.props.showShoppingBag}
            />
          );
        })}
        </div>
        <div className="groupInfo__action groupInfo__action--add" onClick={this.props.showAddParticipants}>
          <i className="groupInfo_action__icon groupInfo_action__icon--add">
            <img src={plusIcon} alt="" className="groupInfo_action__img"/>
          </i>
          <span>Add Participants</span>
        </div>
        <div className="groupInfo__action groupInfo__action--delete">
          <i className="groupInfo_action__icon groupInfo_action__icon--delete">
            <img src={deleteIcon} alt="" className="groupInfo_action__img"/>
          </i>
          <span>Delete Group</span>
        </div>
      </div>
    );
  }
}
