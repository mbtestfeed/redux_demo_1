import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function generics(state = [], action) {
  switch(action.type) {
    case types.LOAD_GENERICS_SUCCESS:
      console.log(action);
      return action.generics;

    case types.CREATE_GENERIC_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.generic)
      ];

    case types.UPDATE_GENERIC_SUCCESS:
      return [
        ...state.filter(generic => generic.id !== action.generic.id),
        Object.assign({}, action.generic)
      ];

    default:
      return state;
  }
}
