import {connect} from 'react-redux';
import Layout from './Layout';
import {login} from '../../actions';

export default connect(
  store => ({user: store.user}),
  {
    login,
  },
  (stateProps, dispatchProps, parentProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...parentProps,
  })
)(Layout)
