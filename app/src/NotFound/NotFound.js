import React from 'react';
import { Link } from 'react-router';

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div className="not_found">
          <h1>Not found.<Link to={'/~ven/main'}>Go main</Link></h1>
        </div>
      </div>
    )
  }
}
