import * as APIUtil from '../util/github_api_util';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
})

export const fetchUsers = (query) => (dispatch) => (
  APIUtil.fetchUsers(query).then(
    (results) => dispatch(receiveSearchResults(results))
  )
);
