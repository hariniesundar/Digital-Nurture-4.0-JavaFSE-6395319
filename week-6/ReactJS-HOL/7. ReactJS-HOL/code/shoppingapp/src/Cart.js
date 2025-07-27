import React from "react";

class Cart extends React.Component {
  render() {
    const { itemname, price } = this.props;
    return (
      <tr>
        <td style={{
          border: "1px solid grey",
          padding: "10px"
        }}>{itemname}</td>
        <td style={{
          border: "1px solid grey",
          padding: "10px"
        }}>{price}</td>
      </tr>
    );
  }
}

export default Cart;
