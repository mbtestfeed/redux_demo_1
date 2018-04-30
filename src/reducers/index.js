import {combineReducers} from 'redux';
import generics from './genericReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  generics,
  ajaxCallsInProgress
});

export default rootReducer;
