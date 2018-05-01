import * as types from './actionTypes';
import genericApi from '../api/mock/mockGenericApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import ReduxThunk from 'redux-thunk';

export function loadGenericsSuccess(generics) {
  return { type: types.LOAD_GENERICS_SUCCESS, generics: generics };
}

export function updateGenericSuccess(generic) {
  return { type: types.UPDATE_GENERIC_SUCCESS, generic: generic };
}

export function createGenericSuccess(generic) {
  return { type: types.CREATE_GENERIC_SUCCESS, generic };
}

export function loadTastesSuccess(tastes) {
  return { type: types.LOAD_TASTES_SUCCESS, tastes: tastes };
}

export function loadGenerics() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return genericApi.getAllGenerics().then((generics) => {
      dispatch(loadGenericsSuccess(generics));
    }).catch((error) => {
      throw(error);
    });
  };
}

export function saveGeneric(generic) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return genericApi.saveGeneric(generic).then(generic => {
      generic.id ? dispatch(updateGenericSuccess(generic)) :
        dispatch(createGenericSuccess(generic));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function loadTastes() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return genericApi.getAllTastes().then((tastes) => {
      dispatch(loadTastesSuccess(tastes));
    }).catch((error) => {
      throw(error);
    });
  };
}
