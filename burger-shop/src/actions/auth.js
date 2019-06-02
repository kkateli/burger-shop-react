export const authStart = () => {
  return {
    type: "AUTH-START"
  };
};

export const authSuccess = authData => {
  return {
    type: "AUTH_SUCCESS",
    payload: authData
  };
};

export const authFail = error => {
  return {
    type: "AUTH_FAIL",
    payload: error
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
  };
};
