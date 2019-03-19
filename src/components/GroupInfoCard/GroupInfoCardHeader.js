import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import groupIcon from '../../assets/icons/group2Copy2.png';
import closeIcon from '../../assets/icons/nounClose2043081000000Copy@2x.png';


export default class GroupInfoCardHeader extends Component {
  render() {
    return (
      <div className="GroupInfoCardHeader">
        <button><img src={groupIcon} /></button>
        <p className="GroupInfoCardHeader__p">
        Group Info
        </p>
        <button><img className="GroupInfoCard__img" src={closeIcon} /*onClick={this.props.showGroupInfo} */
        onClick={this.props.closeGroupInfo}
        /></button>      
      </div>
    )
  }
}
