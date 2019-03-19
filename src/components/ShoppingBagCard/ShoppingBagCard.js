import React, { Component } from "react";
import ShoppingBagCardHeader from "./ShoppingBagCardHeader";
import BagItem from "./BagItem";
import { connect } from "react-redux";

class ShoppingBagCard extends Component {
  render() {
    return (
      <div className={this.props.shoppingBagAnimation + " ShoppingBagCard"}>
        <div className="swipeBar swipeBar--2" onClick={this.props.closeShoppingBag}>
          <hr className="swipeBar-2__hr" />
          <hr className="swipeBar-2__hr" />
          <hr className="swipeBar-2__hr" />
        </div>
        <ShoppingBagCardHeader data={this.props.shoppingBag[0]} />
        <div className="bagItems">
        {this.props.shoppingBag.map(item => {
          return (
            <BagItem data={item}/>
          );
        })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingBag: state.users[0].shoppingBag
  };
}

export default connect(mapStateToProps)(ShoppingBagCard);
