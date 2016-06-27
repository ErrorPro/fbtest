import React, {PropTypes} from 'react';

export default class Main extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    logout: PropTypes.object,
  }

  render() {
    const {data, logout} = this.props;

    return (
      <div>
        <div className="main">
          <button onClick={logout}>Logout</button>
          <h1>Hello, this is main page. </h1>
        </div>
      </div>
    )
  }
}
