import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Navigation from '../containers/Navigation';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect()(App);
