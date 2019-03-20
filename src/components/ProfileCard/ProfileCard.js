import React, { Component } from "react";
import TabNavigation from "../TabNavigation/TabNavigation";
import closeIcon from "../../assets/icons/nounClose2043081000000Copy@2x.png";
import SubmitButton from "./SubmitButton";
import { connect } from "react-redux";

class ProfileCard extends Component {
  render() {
    return (
      <div className={this.props.profileAnimation + " ProfileCard"}>
        <img
          src={closeIcon}
          className="ProfileCard__closeIcon"
          onClick={this.props.closeProfile}
        />
        <img
          src={this.props.users.profilePicture}
          alt=""
          className="ProfileCard__profilePicture"
        />
        <form action="" className="ProfileCard__form">
          <div className="smallLabelWrapper">
            <label htmlFor="" className="smallWrapper">
              <span className="label">First Name</span>
              <input
                type="text"
                name=""
                id=""
                className="input input--firstName"
              />
            </label>
            <label htmlFor="" className="smallWrapper">
              <span className="label">Last Name</span>
              <input
                type="text"
                name=""
                id=""
                className="input input--lastName"
              />
            </label>
          </div>
          <label htmlFor="">
            <span className="label">Email Address</span>
            <input type="text" name="" id="" className="input input--email" />
          </label>
          <label htmlFor="">
            <span className="label">Birth Date</span>
            <input
              type="text"
              name=""
              id=""
              className="input input--birthDate"
            />
          </label>
          <SubmitButton />
        </form>
        <TabNavigation
          showProfile={this.props.showProfile}
          profile={this.props.profile}
          proceedToChats={this.props.proceedToChats}
        >
          {" "}
        </TabNavigation>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users[0]
  };
}

export default connect(mapStateToProps)(ProfileCard);
