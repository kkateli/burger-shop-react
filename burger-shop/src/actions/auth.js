import axios from "axios";

export const authStart = () => {
  return {
    type: "AUTH-START"
  };
};

export const authSuccess = (token,userId) => {
  return {
    type: "AUTH_SUCCESS",
    token:token,
    userId:userId
  };
};

export const authFail = error => {
  return {
    type: "AUTH_FAIL",
    payload: error
  };
};

export const logout = ()=>{
  return{
    type:"AUTH_LOGOUT"
  }
}

export const auth = (email, password, ifSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSesureToken: true
    };
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB_ovwqdXVswNx3oRc3UXEYQm-6EZxvmRg";
    if (ifSignup === false) {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB_ovwqdXVswNx3oRc3UXEYQm-6EZxvmRg";
    }
    axios
      .post(url, authData)
      .then(response => {
        console.log(response.data);
        dispatch(authSuccess(response.data.idToken,response.data.localId));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
