import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers'; //MBTF#TODO:
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import initialState from '../reducers/initialState';
import thunk from 'redux-thunk';

export default function configureStores(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
