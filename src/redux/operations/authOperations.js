import axios from 'axios';
import authActions from '../action/authActions';

export const baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';

  }
}

export const registerOperation = credentials => async dispatch => {
  try {
    dispatch(authActions.registerRequest());
    await axios.post(`${baseURL}/users/signup`, credentials)
      .then(res => {
        token.set(res.data.token);
        dispatch(authActions.registerSuccess(res.data));
        console.log(res);
      })
  } catch (error) {
    dispatch(authActions.registerError(error))
  }
}

export const logIn = credentials => async dispatch => {
  try {
    dispatch(authActions.loginRequest);
    await axios.post(`${baseURL}/users/login`, credentials)
      .then(res => {
        token.set(res.data.token);
        dispatch(authActions.loginSuccess(res.data));
      })
  } catch (error) {
    dispatch(authActions.loginError(error))
  }
}

export const logOut = () => async dispatch => {
  try {
    dispatch(authActions.logoutRequest());
    await axios.post(`${baseURL}/users/logout`)
      .then(() => {
        token.unset();
        dispatch(authActions.logoutSuccess())
      })

  } catch (error) {
    dispatch(authActions.logoutError(error));
  }
}

export const getCurrentUser = () => async (dispatch, getSTate) => {
  const {
    auth: { token: persistedToken },
  } = getSTate();
  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  try {
    dispatch(authActions.getCurrentUserRequest());
    await axios.get(`${baseURL}/users/current`)
      .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))

  } catch (error) {
    dispatch(authActions.getCurrentUserError(error))
  }
}
