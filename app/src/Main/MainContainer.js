import {connect} from 'react-redux';
import {logout} from '../../actions';
import Main from './Main';

export default connect(
  null,
  {
    logout
  },
  (stateProps, dispatchProps, parentProps) => ({
    ...dispatchProps,
    ...parentProps,
    data: 'test'
  })
)(Main)
