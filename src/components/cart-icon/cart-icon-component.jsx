import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import "./cart-icon.styles.scss";

import { connect } from "react-redux";
import { toogleCartHidden } from "../../redux/cart/cart.actions.js";
const CartIcon = ({ toogleCartHidden }) => (
  <div className="cart-icon" onClick={toogleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
