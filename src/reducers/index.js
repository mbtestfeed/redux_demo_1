import {combineReducers} from 'redux';
import generics from './genericReducer';
import tastes from './tastesReducer';
import genericSort from './genericSortReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  generics,
  tastes,
  genericSort,
  ajaxCallsInProgress
});

export default rootReducer;
