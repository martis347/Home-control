import React, {PropTypes} from 'react';
import {translate} from "react-translate";

@translate("Calendar")
class Calendar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
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
      }
    };
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.calendar !== nextProp.calendar) {
      this.setState({calendar: nextProp.calendar});
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.calendar.today !== nextProps.calendar.today;
  }

  days() {
    let days = [];
    let template = function (day, name) {
      return <li><span className={name}>{day}</span></li>;
    };

    for (let i = 0; i < this.props.calendar.firstDay; i++) {
      days.push(template(this.props.calendar.prevMonthDaysCount - i, 'inactive'));
    }
    for (let i = 1; i <= this.props.calendar.daysCount; i++) {
      if (i === this.props.calendar.today) {
        days.push(template(i, 'active'));
      } else {
        days.push(template(i));
      }
    }
    let i = 1;
    while (days.length % 7 != 0) {
      days.push(template(i++, 'inactive'));
    }

    return days;
  }

  render() {
    const {t} = this.props;
    return (
      <div className="calendar">
        <div className="month">
          <ul>
            <li style={{textAlign: 'center'}}>
              {this.props.calendar.year + ", " + t(this.state.months[this.props.calendar.month])}
            </li>
          </ul>
        </div>

        <ul className="weekdays">
          <li>{t("MONDAY")}</li>
          <li>{t("TUESDAY")}</li>
          <li>{t("WEDNESDAY")}</li>
          <li>{t("THURSDAY")}</li>
          <li>{t("FRIDAY")}</li>
          <li>{t("SATURDAY")}</li>
          <li>{t("SUNDAY")}</li>
        </ul>

        <ul className="days">
          {this.days()}
        </ul>
      </div>
    );
  }
}

Calendar.propTypes = {
  calendar: PropTypes.object.isRequired,
  t: PropTypes.object
};

export default Calendar;
