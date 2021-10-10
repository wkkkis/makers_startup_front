import { productsApi } from '../../api/productsApi';
import { SET_PRODUCTS, SET_PRODUCTS_COUNT } from '../../utils/const';

export const setProducts = data => ({ type: SET_PRODUCTS, payload: data })
export const setProductsCount = count => ({ type: SET_PRODUCTS_COUNT, payload: count })

export const getProducts = page => async dispatch => {
  try {
    let response = await productsApi.getProducts(page)
    dispatch(setProducts(response.result))
    dispatch(setProductsCount(response.count))
  } catch (e) {
    console.log(e)
  }
}
