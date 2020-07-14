import React, { Fragment } from "react";

import classes from "./product.module.css";

import Button from "../Button/Button";

class Product extends Component {
  submitForm() {}

  render() {
    return (
      <Fragment>
        <section className={classes.productPage}>
          <div className={classes.productDetails}>
            <h4>New Product</h4>
            <p>Edit Product</p>
          </div>
          <form
            action=""
            className={classes.createProduct}
            onSubmit={this.submitForm}
          >
            <div className={classes.formControl}>
              <label htmlFor="productName"></label>
              <input
                type="text"
                name="name"
                id="productName"
                placeholder="Productname"
                className={classes.InputElement}
              />

              <label htmlFor="ID"></label>
              <input
                type="text"
                name="ID"
                id="ID"
                placeholder="ID"
                className={classes.InputElement}
              />
              <label htmlFor="Amount"></label>
              <input
                type="text"
                name="Amount"
                id="Amount"
                placeholder="Amount"
                className={classes.InputElement}
              />
              <label htmlFor="Description"></label>
              <textarea
                type="text"
                name="Description"
                id="Description"
                placeholder="Description"
                className={classes.InputElement}
              />
            </div>
            <Button btnType={"product"}>Save Product</Button>
          </form>
        </section>
      </Fragment>
    );
  }
}

export default Product;
