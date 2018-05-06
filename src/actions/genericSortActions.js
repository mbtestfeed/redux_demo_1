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

export function getTaste(tasteType) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return genericApi.getTaste(tasteType).then((tasteGenerics) => {
      dispatch(getAllUmamiSuccess(tasteGenerics));
    }).catch((error) => {
      throw(error);
    });
  };
}

export function getSorted(column, columnType) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return genericApi.getSorted(column, columnType).then((sortedGenerics) => {
      dispatch(getAllUmamiSuccess(sortedGenerics));
    }).catch((error) => {
      throw(error);
    });
  };
}
