import React, { Component } from "react";

import Product from "../Product/product";
import Sales from "../Sales/Sales";
import Admin from "../Admin/Admin";
import Attendant from "../Attendant/Attendant";

import classes from "./sidebar.module.css";
class SidebarNav extends Component {
  state = {
    currentChild: 0,
    name: "",
    id: "",
    amount: "",
    qty: "",
    description: "",
    action: {sell: 'sell', Delete: 'delete'},
    products: []
  };

  handleInputChange = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleDOMEvent = (event, id) => {
    event.preventDefault();
    this.setState({
      currentChild: id
    });
  };

  submitFormHandler = event => {
    event.preventDefault();
    console.log(this.state);

    const { id, name, amount, qty, description, action } = this.state;
    const itemsInState = this.state.products;
    const itemsArrayLength = itemsInState.length;
    const ProductId = itemsArrayLength
      ? itemsInState[itemsArrayLength - 1].id + 1
      : 1;
    this.setState({
      products: [
        ...itemsInState,
        Object.assign(
          {},
          {
            ProductId,
            id,
            name,
            amount,
            qty,
            description,
            action
          }
        )
      ],

      ProductId,
      id,
      name,
      amount,
      qty,
      description,
      action
    });
  };

  render() {
    let children;
    // eslint-disable-next-line no-lone-blocks
    {
      if (this.state.currentChild == 1) children = <Admin />;
      else if (this.state.currentChild == 2) children = <Attendant />;
      else if (this.state.currentChild == 3)
        children = (
          <Product
            name={this.state.name}
            id={this.state.id}
            amount={this.state.amount}
            qty={this.state.qty}
            description={this.state.description}
            onChange={this.handleInputChange}
            submitForm={this.submitFormHandler}
          />
        );
      else if (this.state.currentChild == 4)
        children = <Sales products={this.state.products} />;
    }
    // console.log(this.state);
    return (
      <section className={classes.sidebarNav}>
        <div className={classes.sidebar}>
          <div className={classes.sidebarContent}>
            <div className={classes.logo}>
              <h3>S<span>T</span>M</h3>
            </div>
            <div className={classes.list}>
              <ul>
                {menuData &&
                  menuData.map(data => {
                    // const [itemId, pageName, url] = { menuData };
                    return (
                      <li key={data.id}>
                        <a
                          className={
                            this.state.currentChild === data.id
                              ? classes.activeLink
                              : null
                          }
                          href={data.url}
                          onClick={event => this.handleDOMEvent(event, data.id)}
                        >
                          {data.pageName}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.children}>{children}</div>
      </section>
    );
  }
}
export default SidebarNav;
