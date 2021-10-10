import { SET_USER_EMAIL, SET_USER_STATUS, SET_USER_TOKEN, SET_USER_USERNAME } from '../../utils/const';

let initialState = {
  email: null,
  status: null,
  username: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_USERNAME:
      return {
        ...state,
        username: action.payload
      }
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.payload
      }
    case SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;
