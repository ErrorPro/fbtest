import {singIn, singUp} from './utils/api';
import {browserHistory} from 'react-router';

const authorize = async (dispatch) => {
  FB.api('/me?fields=name,email', async (response) => {
    try {
      const user = await singIn({
        email: response.email,
        password: response.id,
      });

      if (!user.rows.length) {
        const newUser = await singUp({
          first_name: response.name,
          last_name: response.name,
          email: response.email,
          password: response.id,
        });
      }
      console.log(dispatch)
      dispatch({
        type: 'LOGIN',
        payload: response,
      });

      browserHistory.push('/main')
    } catch (e) {
      dispatch({
        type: 'LOGIN_ERROR',
        payload: JSON.stringify(e),
      });
    }
  });
}

export const login = () => {
  return (dispatch) => {
    FB.login((response) => {
      authorize(dispatch);
      return;
      if (response.status === 'connected') {
        authorize(dispatch);
      } else if (response.status === 'not_authorized') {
        dispatch({
          type: 'LOGIN_ERROR',
          payload: 'You are not autorized, please try again later.'
        });
      } else {
        dispatch({
          type: 'LOGIN_ERROR',
          payload: 'Internal error. Try again later.'
        });
      }
    }, {scope: 'public_profile,email'});
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({type: 'LOGOUT'});
    browserHistory.push('/');
  }
};
