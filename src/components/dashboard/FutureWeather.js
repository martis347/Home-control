import React, {PropTypes} from 'react';
import DayWeather from './DayWeather';
import Translate from 'react-translate-component';


class FutureWeather extends React.Component {
  constructor(props) {
    super(props);
  }

  dayOfWeekAsString = dayIndex => {
    return ["SUNDAY_1", "MONDAY_1", "TUESDAY_1", "WEDNESDAY_1", "THURSDAY_1", "FRIDAY_1", "SATURDAY_1"][dayIndex];
  };

  futureWeather = () => {
    return this.props.data.map((item, key) => {
      return (<DayWeather min={Math.round(item.min)}
                          max={Math.round(item.max)}
                          day={<Translate content={'Calendar.' + this.dayOfWeekAsString(item.day.getDay())} />}
                          icon={item.icon}
                          key={key}/>);
    });
  };

  render() {
    return (
      <div className="future-weather">
        {this.futureWeather()}
      </div>
    );
  }
}

FutureWeather.propTypes = {
  data: PropTypes.array.isRequired
};

export default FutureWeather;
