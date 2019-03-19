import React, { Component } from 'react'

export default class MessageFade extends Component {
  render() {
    return (
      <div className="MessageFade">
        <div className="msgFade msgFade--fade">
        <img src="https://www.bmo.com/dist/images/personal/investments/girl-smiling.jpg" alt="" className="msgFade__img" />
          Nice one sis, i think i'd take this one though... 
        </div>
        <div className="msgFade msgFade--solid">
        <img src="https://ct.yimg.com/cy/4729/39021888166_fc3dcc_128sq.jpg" alt="" className="msgFade__img" />
        ❤️❤️❤️</div>
      </div>
    )
  }
}
