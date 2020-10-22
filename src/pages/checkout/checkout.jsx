import React from "react";
import "./checkout.styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItems,
  cartItemsCountTotal,
} from "../../redux/cart/cart.selectors.js";
import ItemCheckout from "../../components/checkout-item/checkout-item.component";
import StripeCheckOutButton from "../../components/stripe-checkOut-button/stripe.button";
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
    <div className="test-warning">
      * Please use the following test credit card for payments
      <br />
      4242 4242 4242 4242 - Exp 01/20 - CVC 123
    </div>
    <StripeCheckOutButton price={total} />
  </div>
);

const mapStateToprops = createStructuredSelector({
  cartItems: selectCartItems,
  total: cartItemsCountTotal,
});

export default connect(mapStateToprops)(Checkout);
