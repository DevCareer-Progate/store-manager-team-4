import React, { Fragment } from "react";

import classes from "./Attendant.module.css";

import passport from "../../assests/images/passport.jpg";

import Button from "../Button/Button";

const Attendant = (props) => {
  const data = ["New product", " New sales"];

  return (
    <Fragment>
      <div>
        <img className={classes.profile} src={passport} />
        <p>Edit profile</p>
      </div>
      <div className={classes.image}></div>
      <div className={classes.list}>
        {/* <list> */}
        <ul>
          <li>Name:</li>
          <li>Username:</li>
          <li>Staff ID:</li>
          <li className={classes.border}></li>
          <li>Total products added:</li>
          <li>Total Sales made:</li>
        </ul>

        {/* </list> */}
      </div>
      <Button btnType={"New-product"}>New product</Button>

      <Button btnType={"New-sales"}>New sales</Button>
    </Fragment>
  );
};
export default Attendant;
