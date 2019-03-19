import React, { Component } from "react";
import eNviteIcon from "../../assets/icons/logo3.png";

const LaunchButtonContainer = props => {
  return (
    <div className="LaunchButtonContainer">
      {!props.showMessageFade && <span className="LaunchButtonContainer__span">Shop with friends</span>}
      <button onClick={props.proceedToLogin} className="LaunchButtonContainer__btn"><img  src={eNviteIcon} alt="" className="LaunchButtonContainer__img"/>
      {props.showMessageFade && <span className="msgNumber">9</span>}
      </button>
    </div>
  );
};
export default LaunchButtonContainer;
