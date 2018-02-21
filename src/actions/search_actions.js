import * as APIUtil from '../util/github_api_util';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = (users) => ({
  type: RECEIVE_SEARCH_RESULTS,
  users
})

export const fetchUsers = (query) => (dispatch) => (
  APIUtil.fetchUsers(query).then(
    (users) => dispatch(receiveSearchResults(users))
  )
);
