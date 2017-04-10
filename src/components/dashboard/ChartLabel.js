import React, {PropTypes} from 'react';

class ChartLabel extends React.Component{
  constructor(props){
    super(props);

  }
  render () {
    const {x, y, value} = this.props;

    return (<text x={x} y={y} dy={-15} dx={8} fill="#bec1e5" fontSize={17} textAnchor="middle">{value}</text>);
  }
}

ChartLabel.propTypes = {
  value: PropTypes.string.isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired
};

export default ChartLabel;
