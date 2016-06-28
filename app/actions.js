import {singIn, singUp} from './utils/api';
import {browserHistory} from 'react-router';

const authorize = async (dispatch) => {
  FB.api('/me?fields=name,email,public_profile,user_friends', async (response) => {
    console.log(response)
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

      dispatch({
        type: 'LOGIN',
        payload: response,
      });

      browserHistory.push('/~ven/main');
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
