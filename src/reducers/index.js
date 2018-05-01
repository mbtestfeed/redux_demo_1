import {combineReducers} from 'redux';
import generics from './genericReducer';
import tastes from './tastesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  generics,
  tastes,
  ajaxCallsInProgress
});

export default rootReducer;
