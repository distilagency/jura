import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import loading from '../reducers/loading';
import jura from '../reducers/jura';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  loading,
  jura,
  routing
});

export default rootReducer;
