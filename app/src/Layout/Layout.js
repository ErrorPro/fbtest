import React, {PropTypes} from 'react';
import {Login} from '../Login';

export default class Layout extends React.Component {
  static propTypes = {
    loginFn: PropTypes.func,
    user: PropTypes.object,
  }

  render() {
    const {user, login: loginFn} = this.props;

    return (
      <div>
        <div className="landing">
          <h1>Hello, this is main page. </h1>
          <h1>Please click login to continue. </h1>
          <Login loginFn={loginFn} />
        </div>
      </div>
    )
  }
}
