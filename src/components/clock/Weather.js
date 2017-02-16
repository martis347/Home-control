import React, {PropTypes} from 'react';
import {ComposedChart, Line, Bar, XAxis, YAxis, Legend} from 'recharts';
import Translate from 'react-translate-component';

class Weather extends React.Component {
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
        mightRain: nextProp.data.some(Weather.mightRain)
      });
    }
  }

  render() {
    if(!this.props.active) return null;
    return (
      <div className="weather">
        <ComposedChart width={window.innerWidth / 2.6} height={window.innerHeight / 2.3} data={this.state.data}
                       margin={{top: 20, right: 50}}>
          <YAxis hide={true} axisLine={false} tickLine={false} orientation={'right'} yAxisId={'right'}/>
          {this.state.mightRain &&
          <YAxis axisLine={false} domain={[0, 100]} tickLine={false} orientation={'left'} label={'%'} yAxisId={'left'}/>}
          {this.state.mightRain &&
          <Bar name={<Translate content={'Weather.RAIN_PROBABILITY'} component="p"/>} dataKey="rainProbability" barSize={window.innerWidth / 70} yAxisId="left"
               fill="#0d1230"/>}
          <XAxis axisLine={false} tickLine={false} dataKey="hour" label={'h'}/>
          <Line name={<Translate content={'Weather.TEMPERATURE'}/>} label={{fill: "#3F6E3A", fontSize: window.innerWidth / 120}}
                legendType={'diamond'} type="monotone" yAxisId="right" dataKey="temperature" stroke="#3F6E3A"
                dot={false}/>
          <Line name={<Translate content={'Weather.REAL_FEEL'}/>} label={{fill: '#135150', fontSize: window.innerWidth / 120}}
                legendType={'diamond'} type="monotone" yAxisId="right" dataKey="realFeelTemperature" stroke="#135150"
                dot={false}/>
          <Legend iconSize={5 + window.innerWidth / 100} wrapperStyle={{fontSize: 6 + window.innerWidth / 200}}/>
        </ComposedChart>
      </div>
    );
  }
}

Weather.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Weather;
