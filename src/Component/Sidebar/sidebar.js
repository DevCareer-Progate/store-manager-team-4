import React, { Component } from "react";

import menuData from "./data";
import Product from "../Product/product";
import Sales from "../Sales/Sales";
import Admin from "../Admin/Admin";
import Attendant from "../Attendant/Attendant";

import classes from "./sidebar.module.css";
class SidebarNav extends Component {
  state = {
    currentChild: 0
  };

  handleDOMEvent = (event, id) => {
    event.preventDefault();
    this.setState({
      currentChild: id
    });
  };

  formHandler() {}
  render() {
    let children;
    {
      if (this.state.currentChild == 1) children = <Admin />;
      else if (this.state.currentChild == 2) children = <Attendant />;
      else if (this.state.currentChild == 3)
        children = <Product submitForm={this.formHandler} />;
      else if (this.state.currentChild == 4) children = <Sales />;
    }
    return (
      <section className={classes.sidebarNav}>
        <div className={classes.sidebar}>
          <div className={classes.sidebarContent}>
            <div className={classes.logo}>
              <h3>STM</h3>
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
