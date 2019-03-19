import React, { Component } from 'react';
import plus from "../../assets/icons/group2Copy.png";


export default class PlusButton extends Component {
  proceedToMessanger = () => {
    this.props.showNewGroup()
    this.props.proceedToMessanger()
  }
  render() {
    return (
        <button className="PlusButton" onClick={this.proceedToMessanger }><img  src={plus} alt="" className=""/></button>
    )
  }
}
