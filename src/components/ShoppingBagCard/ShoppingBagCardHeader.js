import React, { Component } from "react";

export default class ShoppingBagCardHeader extends Component {
  render() {
    return (
      <div className="ShoppingBagCardHeader">
        <img
          src={this.props.data.profilePicture}
          className="ShoppingBagCardHeader__profilePicture"
        />
        <div>
          <p className="ShoppingBagCardHeader__owner">{this.props.data.owner}</p>
          <span className="ShoppingBagCardHeader__label">Shopping Bag</span>
        </div>
      </div>
    );
  }
}
