import React, {PropTypes} from 'react';
import {ComposedChart, Line, Bar, XAxis, YAxis} from 'recharts';
import Translate from 'react-translate-component';
import ChartLabel from './ChartLabel';

class WeatherChart extends React.Component {
  static mightRain(element) {
    return element.rainProbability > 0;
  }

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      mightRain: false,
    };
  }

  componentWillReceiveProps(nextProp) {
    if (this.state.data != nextProp.data) {
      this.setState({
        data: nextProp.data,
        mightRain: nextProp.data.some(WeatherChart.mightRain),
        minTemp: Math.min(...this.props.data.map(a => {return a.temperature;}), ...this.props.data.map(a => {return a.realFeelTemperature;})),
        maxTemp: Math.max(...this.props.data.map(a => {return a.temperature;}), ...this.props.data.map(a => {return a.realFeelTemperature;}))
      });
    }
  }

  render() {
    return (
      <div className="weather-chart">
        <ComposedChart width={window.innerWidth /2} height={window.innerHeight / 3} data={this.state.data} margin={{top: 40, right: 10}}>
          <YAxis hide={true} domain={[this.state.minTemp, this.state.maxTemp]} axisLine={false} tickLine={false} orientation={'right'} yAxisId={'right'}/>
          <YAxis hide={!this.state.mightRain} axisLine={false} domain={[0, 100]} tickLine={false} orientation={'left'} label={'%'} yAxisId={'left'}/>
          {this.state.mightRain &&
          <Bar name={<Translate content={'Weather.RAIN_PROBABILITY'} component="p"/>} dataKey="rainProbability" barSize={window.innerWidth / 70} yAxisId="left"
               fill="#314ec0"/>}
          <XAxis axisLine={false} tickLine={false} dataKey="hour" />
          <Line name={<Translate content={'Weather.TEMPERATURE'}/>} label={<ChartLabel/>}
                legendType={'diamond'} type="monotone" yAxisId="right" dataKey="temperature" stroke="#7781e9"
                dot={false} strokeWidth={9}/>
        </ComposedChart>
      </div>
    );
  }
}

WeatherChart.propTypes = {
  active: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
};

export default WeatherChart;
