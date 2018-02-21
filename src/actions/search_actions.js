import * as APIUtil from '../util/github_api_util';

export const fetchUsers = (query) => (dispatch) => (
  APIUtil.fetchUsers(query).then(
    (users) => console.log(users)
  )
);
