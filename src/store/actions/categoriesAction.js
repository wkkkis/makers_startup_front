import { categoriesApi } from '../../api/categoriesApi';
import { SET_CATEGORIES, SET_CATEGORIES_COUNT } from '../../utils/const';

export const setCategories = data => ({ type: SET_CATEGORIES, payload: data })
export const setCategoriesCount = count => ({ type: SET_CATEGORIES_COUNT, payload: count })

export const getCategories = page => async dispatch => {
  try {
    let response = await categoriesApi.getCategories(page)
    dispatch(setCategories(response.results))
    dispatch(setCategoriesCount(response.count))
  } catch (e) {
    console.log(e)
  }
}