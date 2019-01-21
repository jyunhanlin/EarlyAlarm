import * as actionTypes from './types';

import { googleSignInWithToken } from '../../services/firebase';

export function signIn() {
  return (dispatch) => {
    googleSignInWithToken().then((idToken) => {
      dispatch(authSuccess());
      dispatch(setToken(idToken));
    }).catch((err) => {
      console.log(err);
      dispatch(authFailure());
    });
  };

}

export function authSuccess() {
  return {
    type: actionTypes.AUTH_SUCCESS
  };
}

export function authFailure() {
  return {
    type: actionTypes.AUTH_FAILURE
  }
}

export function setToken(token) {
  return {
    type: actionTypes.SET_TOKEN,
    token
  };
}

export function signOut() {
  return {
    type: actionTypes.SIGN_OUT
  };
}

export function checkAuthStart() {
  return {
    type: actionTypes.CHECK_AUTH_START
  };
}

export function checkAuthDone() {
  return {
    type: actionTypes.CHECK_AUTH_DONE
  };
}