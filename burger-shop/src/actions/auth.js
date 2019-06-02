import axios from "axios";

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
    const authData={
        email:email,
        password:password,
        returnSesureToken:true
    }
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB_ovwqdXVswNx3oRc3UXEYQm-6EZxvmRg',authData)
    .then(response=>{
        console.log(response.data);
        dispatch(authSuccess(response.data));

    })
    .catch(err=>{
        console.log(err);
        dispatch(authFail(err));
    })

  };
};
