import React, {PropTypes} from 'react';
import Skycons from 'react-skycons';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

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
    if (!this.props.data.icon)
      return <div/>;

    return (
      <div className="weather-new">
        <div className="first-line">
          <div className="weather-icon">
            <Skycons color="white " icon={this.mapIconText(this.props.data.icon)} autoplay={true}/>
          </div>
          <div className="weather-text">
            {Math.round(this.props.data.temperature)}°C
          </div>
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  data: PropTypes.object.isRequired
};

export default Weather;
