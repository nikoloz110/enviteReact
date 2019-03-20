import React, { Component } from "react";

export default class MessageFade extends Component {
  render() {
    return (
      <div className="MessageFade">
        <div className="msgFade msgFade--fade">
          <img src="/images/girl1.jpg" alt="" className="msgFade__img" />
          Nice one sis, i think i'd take this one though...
        </div>
        <div className="msgFade msgFade--solid">
          <img src="/images/girl2.jpg" alt="" className="msgFade__img" />
          ❤️❤️❤️
        </div>
      </div>
    );
  }
}
