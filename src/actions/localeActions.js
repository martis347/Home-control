import * as types from './actionTypes';

export function localeChanged(locale) {
  return {type: types.LOCALE_CHANGED, locale};
}

export function changeLocale(locale) {
  return function (dispatch) {
    dispatch(localeChanged(locale));
  };
}
