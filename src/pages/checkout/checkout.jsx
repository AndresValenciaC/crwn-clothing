import React from "react";
import "./checkout.styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItems,
  cartItemsCountTotal,
} from "../../redux/cart/cart.selectors.js";
import ItemCheckout from "../../components/checkout-item/checkout-item.component";

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="checkout-block">Product</div>
      <div className="checkout-block">Description</div>
      <div className="checkout-block">Quantity</div>
      <div className="checkout-block">Prize</div>
      <div className="checkout-block">Remove</div>
    </div>
    {cartItems.map((item) => (
      <ItemCheckout key={item.id} cartItem={item} />
    ))}
    <div className="total">Total : ${total}</div>
  </div>
);

const mapStateToprops = createStructuredSelector({
  cartItems: selectCartItems,
  total: cartItemsCountTotal,
});

export default connect(mapStateToprops)(Checkout);
