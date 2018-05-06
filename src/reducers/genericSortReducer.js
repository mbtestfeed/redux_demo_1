import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function genericSort(state = [], action) {
  switch(action.type) {
    case types.GET_ALL_UMAMI_SUCCESS:
      return action.genericSort;
    case types.GET_TASTE_SUCCESS:
      return action.tasteGenerics;
    default:
      return state;
  }
}
