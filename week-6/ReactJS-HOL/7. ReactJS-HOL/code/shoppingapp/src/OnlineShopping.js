import React from "react";
import Cart from "./Cart";

class OnlineShopping extends React.Component {
  render() {
    const items = [
      { itemname: "Laptop", price: 80000 },
      { itemname: "TV", price: 120000 },
      { itemname: "Washing Machine", price: 50000 },
      { itemname: "Mobile", price: 30000 },
      { itemname: "Fridge", price: 70000 }
    ];

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2 style={{
          color: "green",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          marginBottom: "30px"
        }}>
          Items Ordered :
        </h2>

        <table style={{
          border: "2px solid #ccc",
          borderCollapse: "collapse",
          margin: "0 auto",
          width: "400px",
          fontFamily: "Arial, sans-serif"
        }}>
          <thead>
            <tr>
              <th style={{
                border: "1px solid grey",
                padding: "10px",
                backgroundColor: "#f8f8f8"
              }}>Name</th>
              <th style={{
                border: "1px solid grey",
                padding: "10px",
                backgroundColor: "#f8f8f8"
              }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <Cart key={index} itemname={item.itemname} price={item.price} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
