import React, { Component } from "react";
import eNviteIcon from "../../assets/icons/logo3.png";


const LoginCard = props => {
  return (
    <div className={props.loginAnimation + " LoginCard"}>
      <div className="swipeBar swipeBar--1 swipeBar--1--1" onClick={props.closeLogin}></div>
      <img className="LoginCard__img" src={eNviteIcon} alt="" />
      <h1 className="LoginCard__h1">Hello.</h1>
      <p className="LoginCard__p-1">
        To start the Online Mall mood with your friends you must be connected
      </p>
      <div className="LoginCard__btnContainer">
        <button className="LoginCard__btn LoginCard__btn--fb" onClick={props.proceedToChats}>
          <i className="LoginCard__i LoginCard__i--fb" />
        </button>
        <button className="LoginCard__btn" onClick={props.proceedToChats}>
          <i className="LoginCard__i LoginCard__i--google" />
        </button>
      </div>
      <p className="LoginCard__p-2">
        Powered by <span className="LoginCard__span">eNvite</span>
      </p>
    </div>
  );
};

export default LoginCard;
