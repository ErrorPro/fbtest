import React, {PropTypes} from 'react';

export default class DriverItem extends React.Component {
  static propTypes = {
    driver: PropTypes.object,
  }

  render() {
    const {driver: {url, name, bio}} = this.props;

    return (
      <div className="driver">
        <img className="image" src={url} />
        <div className="info">
          <span className="driver-name">{name}</span>
          <span>{bio}</span>
        </div>
      </div>
    )
  }
}
