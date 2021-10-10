import { productsApi } from '../../api/productsApi';
import { SET_PRODUCTS, SET_PRODUCTS_COUNT } from '../../utils/const';

export const setProducts = data => ({ type: SET_PRODUCTS, payload: data })
export const setCount = count => ({ type: SET_PRODUCTS_COUNT, payload: count })

export const getProducts = page => async dispatch => {
  try {
    let response = await productsApi.getProducts(page)
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}
