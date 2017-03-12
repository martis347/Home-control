import React, {PropTypes} from 'react';
import Translate from 'react-translate-component';

class DateC extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      date: "",
      intervalId: 0,
      months: {
        0: "JANUARY",
        1: "FEBRUARY",
        2: "MARCH",
        3: "APRIL",
        4: "MAY",
        5: "JUNE",
        6: "JULY",
        7: "AUGUST",
        8: "SEPTEMBER",
        9: "OCTOBER",
        10: "NOVEMBER",
        11: "DECEMBER",
      },
      days: {
        1: "MONDAY_LONG",
        2: "TUESDAY_LONG",
        3: "WEDNESDAY_LONG",
        4: "THURSDAY_LONG",
        5: "FRIDAY_LONG",
        6: "SATURDAY_LONG",
        0: "SUNDAY_LONG"
      }
    };
  }

  render() {
    let date = new Date();

    return (
      <div className="date-new">
        <div className="weekday">
          {<Translate content={'Calendar.' + this.state.days[date.getDay()]} />}
        </div>
        <div className="day">
          {<Translate content={'Calendar.' + this.state.months[date.getMonth()]} />}{", "}{date.getDate()}
        </div>
      </div>
    );
  }
}

DateC.propTypes = {
};

export default DateC;
