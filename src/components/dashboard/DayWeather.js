import React, {PropTypes} from 'react';
import Skycons from 'react-skycons';

class DayWeather extends React.Component {
  constructor(props) {
    super(props);
  }

  mapIconText = iconValue => {
    const values = [
      "CLEAR_DAY",
      "CLEAR_NIGHT",
      "PARTLY_CLOUDY_DAY",
      "PARTLY_CLOUDY_NIGHT",
      "CLOUDY",
      "RAIN",
      "SLEET",
      "SNOW",
      "WIND",
      "FOG"
    ];
    return values.filter(value => {
      return value.toLowerCase().split("_").join("") === iconValue.split("-").join("");
    })[0];
  };


  render() {
    return (
      <div className="day">
        <div className="text">
          {this.props.day}
        </div>
        <div className="icon">
          <Skycons color="white " icon={this.mapIconText(this.props.icon)} autoplay={true}/>
        </div>
        <div className="text">
          {this.props.min}°C
          {" / "}
          {this.props.max}°C
        </div>
      </div>
    );
  }
}

DayWeather.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired
};

export default DayWeather;
