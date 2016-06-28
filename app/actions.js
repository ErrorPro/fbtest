import {singIn, singUp} from './utils/api';
import {browserHistory} from 'react-router';

const authorize = () => {
  // FB.api('/me?fields=name,email', (response) => {
    singIn({
      email: 'www@ww.ru',//response.email,
      password: '123'//response.id,
    }).then(data => {
      console.log(data);
      dispatch({
        type: 'LOGIN',
        payload: response,
      });
      // browserHistory.push('/main');
    })
  // });
}

export const login = () => {
  return (dispatch) => {
    FB.login((response) => {
      authorize();
      return;
      if (response.status === 'connected') {
        authorize();
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
