import { RECEIVE_SEARCH_RESULTS } from 'actions/search_actions';
import merge from 'lodash/merge';

const searchReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge([], action.results.items).slice(0, 5);
    default:
      return state;
  }
};

export default searchReducer;
