import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function clockReducer(state = initialState.time, action) {
  switch (action.type) {
    case types.CLOCK_UPDATE: {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();

      return Object.assign({}, state, {
        time: date.toTimeString().split(" ")[0],
        calendar: {
          firstDay: (new Date(year, month, 1).getDay() + 6) % 7,
          lastDay: (new Date(year, month + 1, 0).getDay() + 6) % 7,
          daysCount: new Date(year, month + 1, 0).getDate(),
          today: date.getDate(),
          month: date.getMonth(),
          year: date.getFullYear()
        }
      });
    }

    default:
      return state;
  }
}
