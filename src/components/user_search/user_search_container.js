import { connect } from 'react-redux';
import UserSearch from './user_search';

const mapStateToProps = (state) => ({
  //STATE
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (query => dispatch(fetchUsers(query)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch);
