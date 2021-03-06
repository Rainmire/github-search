import { connect } from 'react-redux';
import UserSearch from './user_search';
import { fetchUsers } from 'actions/search_actions';

const mapStateToProps = (state) => ({
  searchResults: state.searchResults
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (query) => dispatch(fetchUsers(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch);
