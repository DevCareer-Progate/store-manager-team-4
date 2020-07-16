import React, { Component, Fragment } from "react";

import classes from "../Modal/modal.module.css";
import Button from "../Button/Button";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return (
  //       nextProps.show !== this.props.show ||
  //       nextProps.children !== this.props.children
  //     );
  //   }
  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} modalClosed={this.props.modalClosed} />
        <div
          className={classes.modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          <h3>SIGN IN</h3>
          <form action="" className={classes.signupForm}>
            <div className={classes.formControl}>
              <label htmlFor="firstName"></label>
              <input
                type="text"
                name="name"
                id="UserName"
                placeholder="Username"
                className={classes.InputElement}
              />
              <label htmlFor="Password"></label>
              <input
                type="password"
                name="name"
                id="Password"
                placeholder="Password"
                className={classes.InputElement}
              />

              <div>
                <select name="sign in as" className={classes.select}>
                  <option value="sign in as">Sign in as</option>
                  <option value="Admin">Admin</option>
                  <option value="Attendant">Attendant</option>
                </select>
              </div>
            </div>
            <Button btnType={"modal"}>Sign in</Button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Modal;
