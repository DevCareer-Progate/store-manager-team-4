import React, { Fragment } from "react";

import classes from "./Sales.module.css";

import Table from "../Table/Table";
import searchIcon from "../../../src/assests/images/Dashboard (Salea)/searchIcon.png";

const product = props => (
  <Fragment>
    <section className={classes.salesPage}>
      <div className={classes.salesDetails}>
        <form>
          <div className={classes.formControl}>
            <img src={searchIcon} alt={'searchIcon'}></img>
            <input
              type="text"
              name="name"
              id="productName"
              placeholder="Search products by name"
              className={classes.InputElement}
            />
          </div>
        </form>
        <p>Edit Product</p>
      </div>
      <div className={classes.table}>
        <Table products={props.products}/>
      </div>
    </section>
  </Fragment>
);

export default product;
