import React, {Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./product.module.css";

import Button from "../Button/Button";

const product = ({ name, id, amount, qty, description, onChange, submitForm }) => (
  <Fragment>
    <section className={classes.productPage}>
      <div className={classes.productDetails}>
        <h4>New Product</h4>
        <p>Edit Product</p>
      </div>
      <form
        method="POST"
        action="/"
        className={classes.createProduct}
        onSubmit={ submitForm}
      >
        <div className={classes.formControl}>
          <label htmlFor="productName"></label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Productname"
            onChange={onChange}
            className={classes.InputElement}
          />

          <label htmlFor="ID"></label>
          <input
            type="number"
            name="id"
            value={id}
            placeholder="ID"
            onChange={onChange}
            className={classes.InputElement}
          />
          <label htmlFor="Amount"></label>
          <input
            type="text"
            name="amount"
            value={amount}
            placeholder="Amount"
            onChange={onChange}
            className={classes.InputElement}
          />
           <label htmlFor="Qty"></label>
          <input
            type="number"
            name="qty"
            value={qty}
            placeholder="Quantity"
            onChange={onChange}
            className={classes.InputElement}
          />
          <label htmlFor="Description"></label>
          <textarea
            type="text"
            name="description"
            value={description}
            placeholder="Description"
            onChange={onChange}
            className={classes.InputElement}
          />
        </div>
        <Button btnType={"product"}>Save Product</Button>
      </form>
    </section>
  </Fragment>
);

product.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired
};
export default product;
