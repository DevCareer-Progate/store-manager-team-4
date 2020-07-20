import React, { Fragment, Component } from "react";


import Loginpage from "../../src/Components/LandingPage/logInPage";
import Modal from '../Components/Modal/modal';
import SidebarNav from "../../src/Components/Sidebar/sidebar";

export class AppContainer extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    this.setState({
      isClicked: true
    });
  };

  modalClosedHandler = () => {
    this.setState({
      isClicked: false
    });
  };

  render() {
    return (
      <Fragment>
        <Loginpage clicked={this.handleClick} />
        <Modal
          modalClosed={this.modalClosedHandler}
          show={this.state.isClicked}
        />
      
        
        {/* <Modal clicked ={this.state.isClicked}/> */}
         {/* <LoginPage clicked ={this.state.isClicked}/> */}
         <SidebarNav />
      </Fragment>
    );
  }
}

export default AppContainer;
