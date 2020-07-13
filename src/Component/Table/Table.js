import React, { Component } from "react";
// import attendant from "../Attendant/Attendant";
import classes from "./Table.module.css";

class Table extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      products: [
        { id: 1, name: "Wasif", amount: 21, qty: 1, attendant: "feyi" },
        { id: 2, name: "Ali", amount: 19, qty: 2, attendant: "bukola" },
        { id: 3, name: "Saad", amount: 16, qty: 4, attendant: "odun" },
        { id: 4, name: "Asad", amount: 25, qty: 2, attendant: "oyin" },
        { id: 4, name: "Asad", amount: 25, qty: 2, attendant: "oyin" },
        { id: 4, name: "Asad", amount: 25, qty: 2, attendant: "oyin" },
        { id: 4, name: "Asad", amount: 25, qty: 2, attendant: "oyin" }
      ]
    };
  }

  renderTableData() {
    return this.state.products.map((product, index) => {
      const { id, name, amount, qty, attendant } = product; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{amount}</td>
          <td>{qty}</td>
          <td>{attendant}</td>
          {/* <td>{action}</td> */}
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.products[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        {/* <h1 id='title'>React Dynamic Table</h1> */}
        <table className={classes.products}>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
