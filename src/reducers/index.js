import { combineReducers } from 'redux';
import authencationReducer from './authentication';

const rootReducer = combineReducers({
  authenticated: authencationReducer
});

export default rootReducer;
