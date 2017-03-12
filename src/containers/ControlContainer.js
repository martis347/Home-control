import React from 'react';
import {connect} from 'react-redux';
import Controls from '../components/control/Slider';

class ControlContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }



  render() {
    return (
      <div>
        <Controls/>
      </div>
    );
  }
}


ControlContainer.propTypes = {

};


export default connect()(ControlContainer);
