import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userIcon from "../../assets/icons/nounUser11228000000001.png";
import starIcon from "../../assets/icons/nounStar2097830000000.png";
import historyIcon from "../../assets/icons/nounHistory576599000000.png";
import settingsIcon from "../../assets/icons/nounSettings1187813000000.png";

export default class TabNavigation extends Component {
  render() {
    return (
      <div className={this.props.profile ? "TabNavigation  TabPurple" : "TabNavigation TabWhite"}>
        <div className={this.props.profile ? "TabNavigation__buttonWrapper--purple" : "TabNavigation__buttonWrapper--white"}>
          <button onClick={this.props.proceedToChats}>
            <img src={userIcon} alt="" className="" />
          </button>
          <button onClick={()=>{alert("feature not yet implemented")}}>
            <img src={starIcon} alt="" className="" />
          </button>
        </div>
        <div className={this.props.profile ? "TabNavigation__buttonWrapper--purple" : "TabNavigation__buttonWrapper--white"}>
          <button onClick={()=>{alert("feature not yet implemented")}}>
            <img src={historyIcon} alt="" className="" />
          </button>
          <button onClick={this.props.showProfile}>
            <img src={settingsIcon} alt="" className="" />
          </button>
        </div>
      </div>
    );
  }
}
