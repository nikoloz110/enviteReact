import React, { Component } from 'react'

export default class BagItem extends Component {
  render() {
    const { name, price, priceB4Sale, icon } = this.props.data;
    let priceWhole = [...price]
    let priceChange = priceWhole.splice(-2);
    priceWhole.splice(-1);

    let priceWholeB4Sale = [...priceB4Sale]
    let priceChangeB4Sale = priceWholeB4Sale.splice(-2);
    priceWholeB4Sale.splice(-1);
    // let priceWhole = this.props.data.price.splice
    return (
      <div className="BagItem">
      <div className="BagItem__wrapper1">
        <img src={icon} alt="" className="BagItem__icon"/>
        <p className="BagItem__name">{name}</p>
      </div>
      <div className="BagItem__wrapper2">
        <p className="BagItem__price"><span className="priceWhole">{priceWhole}</span><span className="priceChange">{priceChange}</span></p>
        <p className="BagItem__priceB4Sale strikethrough"><span className="priceWholeB4Sale">{priceWholeB4Sale}</span><span className="priceChangeB4Sale">{priceChangeB4Sale}</span></p>
      </div>
      </div>
    )
  }
}
