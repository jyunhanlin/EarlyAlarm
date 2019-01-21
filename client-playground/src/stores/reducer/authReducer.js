import * as actionTypes from '../actions/types';

const INIT_STATE = {
  checkAuthStatus: true,
  authenticated: false,
  token: ''
}

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true
      };
    case actionTypes.AUTH_FAILURE:
      return {
        ...state,
        authenticated: false
      };
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    case actionTypes.CHECK_AUTH_START:
      return {
        ...state,
        checkAuthStatus: true
      };
    case actionTypes.CHECK_AUTH_DONE:
      return {
        ...state,
        checkAuthStatus: false
      };
    default:
      return state;
  }
}
