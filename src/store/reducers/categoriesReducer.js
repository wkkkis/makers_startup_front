import { SET_CATEGORIES, SET_CATEGORIES_COUNT } from '../../utils/const';

let initialState = {
  categories: null,
  categoriesCount: null
}

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case SET_CATEGORIES_COUNT:
      return {
        ...state,
        categoriesCount: action.payload
      }
    default:
      return state;
  }
}

export default categoriesReducer;
