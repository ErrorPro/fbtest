import {browserHistory} from 'react-router';

export const login = () => {
  return (dispatch) => {
    FB.login((response) => {
      if (response.status === 'connected') {
        FB.api('/me?fields=name,email', (response) => {
          dispatch({
            type: 'LOGIN',
            payload: response,
          });
          browserHistory.push('/main');
        });
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
