import React, {PropTypes} from 'react';

import {ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class Weather extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data:{}
    }
  }

  componentWillReceiveProps(nextProp) {
    if (this.state.data != nextProp.data) {
      this.setState({data: nextProp.data});
    }
  }

  componentDidMount() {
    window.setInterval(function () {
      console.log("A");
      this.forceUpdate();
    }.bind(this), 1000);
  }

  render() {
    if(!this.props.active) return null;
    return (
      <ComposedChart width={600} height={400} data={this.state.data}
                     margin={{top: 20, right: 20, bottom: 20, left: 20}}>
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip/>
        <Legend fill='#353551'/>
        <CartesianGrid stroke='#f5f5f5'/>
        <Bar dataKey='uv' barSize={20} fill='#353551'/>
        <Bar dataKey='pv' barSize={20} fill='#22213f'/>
        <Line type='monotone' dataKey='amt' stroke='#ff7300'/>
      </ComposedChart>
    );
  }
}

Weather.propTypes = {};

export default Weather;
