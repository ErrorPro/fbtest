import React, {PropTypes} from 'react';

export default class Login extends React.Component {
  static propTypes = {
    loginFn: PropTypes.func
  }

  render() {
    return (
      <button className="loginBtn" onClick={this.props.loginFn}> Login </button>
    );
  }
}
