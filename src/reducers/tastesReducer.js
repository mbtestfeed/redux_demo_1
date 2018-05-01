import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tastes(state = [], action) {
  switch(action.type) {
    case types.LOAD_TASTES_SUCCESS:
      console.log(action);
      return action.tastes;

    default:
      return state;
    }
  }
