import React from "react";
import "./collection-item.styles.scss";
import ButtonCustom from "../buttonComponent/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions.js";
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price"> ${price}</span>
      </div>
      <ButtonCustom onClick={() => addItem(item)} inverted>
        Add to cart
      </ButtonCustom>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
