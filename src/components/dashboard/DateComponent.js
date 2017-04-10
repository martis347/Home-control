import React from 'react';
import Translate from 'react-translate-component';

class DateComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      date: "",
      intervalId: 0,
      months: {
        0: "JANUARY_1",
        1: "FEBRUARY_1",
        2: "MARCH_1",
        3: "APRIL_1",
        4: "MAY_1",
        5: "JUNE_1",
        6: "JULY_1",
        7: "AUGUST_1",
        8: "SEPTEMBER_1",
        9: "OCTOBER_1",
        10: "NOVEMBER_1",
        11: "DECEMBER_1",
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

        <div className="text">
          {<Translate content={'Calendar.' + this.state.days[date.getDay()]} />}
          <div className="month">
            {<Translate content={'Calendar.' + this.state.months[date.getMonth()]} />}
          </div>
        </div>
        <div className="day">
          {date.getDate()}
        </div>
      </div>
    );
  }
}

DateComponent.propTypes = {
};

export default DateComponent;
