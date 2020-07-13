import React, { Fragment, Component } from "react";

import Modal from "../../src/Component/Modal/modal";
import Loginpage from "../Component/LandingPage/logInPage";
import SidebarNav from "../../src/Component/Sidebar/sidebar";

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
        {/* <Loginpage clicked={this.handleClick} />
        <Modal
          modalClosed={this.modalClosedHandler}
          show={this.state.isClicked}
        /> */}
        <SidebarNav />
      </Fragment>
    );
  }
}

export default AppContainer;
