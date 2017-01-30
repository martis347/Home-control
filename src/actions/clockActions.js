import * as types from './actionTypes';

export function updateClock(time) {
  return {type: types.CLOCK_UPDATE, time: time};
}

export function tick() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  return function (dispatch) {
    dispatch(updateClock({
      time: date.toTimeString().split(" ")[0],
      calendar: {
        firstDay: (new Date(year, month, 1).getDay() + 6) % 7,
        lastDay: (new Date(year, month + 1, 0).getDay() + 6) % 7,
        daysCount: new Date(year, month + 1, 0).getDate(),
        prevMonthDaysCount: new Date(year, month, 0).getDate(),
        today: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
      }
    }));
  };
}
