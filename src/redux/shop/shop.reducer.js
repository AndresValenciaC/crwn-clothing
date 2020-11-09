/* we dont need the data to be local any more 
import SHOP_DATA from "./shop.data";*/
// Workin with the Db fireStore
import ShopActionTypes from "./shop.types";
const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
