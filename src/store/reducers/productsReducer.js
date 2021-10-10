import { SET_PRODUCTS, SET_PRODUCTS_COUNT } from '../../utils/const';

let initialState = {
  products: null,
  productCount: null
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case SET_PRODUCTS_COUNT:
      return {
        ...state,
        productCount: action.payload
      }
    default:
      return state;
  }
}

export default productsReducer;
