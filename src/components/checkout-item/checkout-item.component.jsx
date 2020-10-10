import React from "react";
import "./checkout-item.styles.scss";

const ItemCheckout = ({ cartItem: { name, imageUrl, quantity, price } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img className="img" src={imageUrl} alt="item" />
    </div>

    <span className="name">{name} </span>
    <span className="quantity">{quantity}</span>
    <span className="price"> {price}</span>
    <span className="remove"> &#10005;</span>
  </div>
);

export default ItemCheckout;