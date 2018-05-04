import * as types from './actionTypes';
import genericApi from '../api/mock/mockGenericApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import ReduxThunk from 'redux-thunk';

export function getAllUmamiSuccess(genericSort) {
  return { type: types.GET_ALL_UMAMI_SUCCESS, genericSort: genericSort };
}


export function getAllUmami() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return genericApi.getAllUmami().then((allUmami) => {
      dispatch(getAllUmamiSuccess(allUmami));
    }).catch((error) => {
      throw(error);
    });
  };
}
