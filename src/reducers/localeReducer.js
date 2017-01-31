import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function localeReducer(state = initialState.locale, action) {
  switch (action.type) {
    case types.LOCALE_CHANGED:
      return action.locale;
    default:
      return state;
  }
}
