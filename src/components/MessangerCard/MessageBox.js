import React, { Component } from 'react'
import sendIcon from '../../assets/icons/pathCopy.png';

export default class MessageBox extends Component {
  render() {
    return (
      <div className="MessageBox">
        <input className="MessageBox__input"/> <span className="sendIcon"><img src={sendIcon} /></span>
      </div>
    )
  }
}
