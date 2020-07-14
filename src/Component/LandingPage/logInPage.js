import React from "react";

import classes from "./LandingPage.module.css";
import Button from "../Button/Button";
// import Modal from "../Modal/modal";
// import cart from "../../assests/images/store-manager.png";

const logInPage = props => (
  <section className={classes.logInPage}>
    <div className={classes.content}>
      <h1>WELCOME TO STORE MANAGER</h1>
      <p>
        Lorem ipsum orem ipsum orem ipsum Lorem ipsum orem ipsumorem ipsumorem
        ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsyo
      </p>
      <Button btnType={"loginPage"} clicked={props.clicked}>
        SIGN IN
      </Button>
    </div>
  </section>
);
export default logInPage;
