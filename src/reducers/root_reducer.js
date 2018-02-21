import { combineReducers } from 'redux';
import searchResults from './search_reducer'

const rootReducer = combineReducers({
  searchResults
});

export default rootReducer;