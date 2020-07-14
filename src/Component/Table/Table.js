import React, { Component } from "react";
import classes from "./Table.module.css";

class Table extends Component {
  renderTableData() {
    if (this.props.products.length > 0) {
      return this.props.products.map((product, index) => {
        const { id, name, amount, qty, description } = product; //destructuring
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{qty}</td>
            <td>{description}</td>
            {/* <td>{action}</td> */}
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          {/* <td>{action}</td> */}
        </tr>
      );
    }
  }

  renderTableHeader() {
    if (this.props.products.length > 0) {
      let removeProductId = Object.keys(this.props.products[0]);
      for (let inputName of removeProductId) {
        if (inputName === "ProductId") {
          removeProductId.splice(0, 1);
        }
      }

      const header = removeProductId.slice(0);
      return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    } else {
      const header = ["id", "name", "amount", "qty", "description"];
      return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    }
  }

  render() {
    return (
      <div>
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
