import React from "react";

import classes from "./LandingPage.module.css";
import Button from "../Button/Button";


const logInPage = props => (
  <section className={classes.logInPage}>
    <div className={classes.content}>
      <h1>WELCOME TO STORE MANAGER</h1>
      <p>f
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
