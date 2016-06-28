import React, {PropTypes} from 'react';
import {DriverItem} from '../DriverItem';

export default class Main extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func,
    data: PropTypes.array,
  }

  render() {
    const {data, logout} = this.props;

    return (
      <div>
        <div className="main">
          <div className="user-block">
            <div className="user">
              <span className="fn">Current user: {'Veniamin Korolev'}</span>
              <button onClick={logout}>Logout</button>
            </div>
          </div>
          <div className="content">
            <h1>Hello, this is page only for logged users. </h1>
            <h3>This is our list of our drivers in your galaxy</h3>
            {data.map(driver => (
              <DriverItem key={driver.id} driver={driver} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
