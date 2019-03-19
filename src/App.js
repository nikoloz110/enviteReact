import React, { Component } from "react";
import LaunchButtonContainer from "./components/LaunchEnvite/LaunchButtonContainer";
import LoginCard from "./components/LoginCard/LoginCard";
import ChatsCard from "./components/ChatsCard/ChatsCard";
import MessangerCard from "./components/MessangerCard/MessangerCard";
import GroupInfoCard from "./components/GroupInfoCard/GroupInfoCard";
import ShoppingBagCard from "./components/ShoppingBagCard/ShoppingBagCard"
import ProfileCard from "./components/ProfileCard/ProfileCard"
import MessageFade from "./components/MessageFade/MessageFade"
import AddParticipants from "./components/AddParticipantsCard/Addparticipant"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons' 
library.add(faFacebookF, faPaperPlane, faWhatsapp, faEnvelope, faAngleRight)

class App extends Component {
  state = {
    loginAnimation: "animateShow",
    chatsAnimation: "animateShowFade",
    messangerAnimation: "animateShowFade",
    profileAnimation: "animateShowFade",
    groupInfoAnimation: "animateShowFade",
    shoppingBagAnimation: "animateShowFade",
    addParticipantsAnimation: "animateShowFade",
    showLogin: false,
    showChats: false,
    showMessanger: false,
    showNewGroup: false,
    showGroupInfo: false,
    activeChatInfo: null,
    showShoppingBag: false,
    showProfile: false,
    showMessageFade: false,
    showAddParticipants: false
  };

  proceedToLogin = () => {
    this.setState({showLogin: true, loginAnimation: "animateShow", profileAnimation: "animateShowFade", showMessageFade: true});
  };

  closeLogin = () => {
    this.setState({loginAnimation: "animateHide"});
    setTimeout(()=>{this.setState({ showLogin: false})}, 500);
  }
// ----------- done
  proceedToChats = () => {
    this.setState({showChats: true, showLogin: false, showProfile: false, chatsAnimation: "animateShowFade"});
  };
  closeChats = () => {
    this.setState({chatsAnimation: "animateHide"});
    setTimeout(()=>{this.setState({ showChats: false})}, 500);
  }
  // --------------- done
  proceedToMessanger = (chatInfo) => {
    this.setState({showMessanger: true, showChats: false, activeChatInfo: (chatInfo || ""), messangerAnimation: "animateShowFade" });
  }
  closeMessanger = () => {
    this.setState({messangerAnimation: "animateHide"});
    setTimeout(()=>{this.setState({ showMessanger: false, showNewGroup: false})}, 800);
  }
// ------------------ done
  showNewGroup = () => {
    this.setState({showNewGroup: true});
  }
  showGroupInfo = () => {
    this.setState({showGroupInfo: true, showMessanger: false, groupInfoAnimation: "animateShowFade"})
  }
  closeGroupInfo = () => {
    this.setState({groupInfoAnimation: "animateHide"});
    setTimeout(()=>{this.setState({showGroupInfo: false, showMessanger: true})}, 800);
  }

  // ----------
  showShoppingBag = () => {
    this.setState({showShoppingBag: true, showGroupInfo: false, shoppingBagAnimation: "animateShowFade"})
  }
  closeShoppingBag = () => {
    this.setState({shoppingBagAnimation: "animateHide"});
    setTimeout(()=>{this.setState({showShoppingBag: false, showGroupInfo: true})}, 800);
  }

  // ---------
  showProfile = () => {
    this.setState({showProfile: true, showChats: false, profileAnimation: "animateShowFade"});
  }
  closeProfile = () => {
    this.setState({profileAnimation: "animateHide"});
    setTimeout(()=>{this.setState({ showProfile: false})}, 800);
  }

  showAddParticipants = () => {
    this.setState({showAddParticipants: true, showGroupInfo: false, addParticipantsAnimation: "animateShowFade"});
  }
  closeAddParticipants = () => {
    this.setState({addParticipantsAnimation: "animateHide"});
    setTimeout(()=>{this.setState({ showAddParticipants: false,  showGroupInfo: true})}, 800);
  }

  render() {
    return (
      <div className="App">
        <div className="siteContent">
          <LaunchButtonContainer proceedToLogin={this.proceedToLogin} showMessageFade={this.state.showMessageFade}/>
          {this.state.showLogin && <LoginCard proceedToChats = {this.proceedToChats} loginAnimation={this.state.loginAnimation} closeLogin={this.closeLogin}/>}
          {this.state.showChats && <ChatsCard proceedToMessanger={this.proceedToMessanger} showNewGroup={this.showNewGroup} showProfile={this.showProfile} chatsAnimation={this.state.chatsAnimation} closeChats={this.closeChats}/>}
          {this.state.showMessanger && <MessangerCard showNewGroup={this.state.showNewGroup} showGroupInfo={this.showGroupInfo} messangerAnimation={this.state.messangerAnimation} closeMessanger={this.closeMessanger}/>}
          {this.state.showGroupInfo && <GroupInfoCard  groupInfo={this.state.activeChatInfo} showShoppingBag={this.showShoppingBag} groupInfoAnimation={this.state.groupInfoAnimation} closeGroupInfo={this.closeGroupInfo} showAddParticipants={this.showAddParticipants}/>}
          {this.state.showShoppingBag && <ShoppingBagCard  shoppingBagAnimation={this.state.shoppingBagAnimation} closeShoppingBag={this.closeShoppingBag}/>}
          {this.state.showProfile && <ProfileCard  profile={this.state.showProfile} proceedToChats={this.proceedToChats} profileAnimation={this.state.profileAnimation} closeProfile={this.closeProfile}/>}
          {this.state.showMessageFade && <MessageFade />}
          {this.state.showAddParticipants && <AddParticipants addParticipantsAnimation={this.state.addParticipantsAnimation} closeAddParticipants={this.closeAddParticipants}/>}
        </div>
      </div>
    );
  }
}

export default App;
