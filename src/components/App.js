import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Navigation from '../containers/NavigationContainer';
import counterpart from 'counterpart';
import lt from '../i18n/lt.json';
import en from '../i18n/en.json';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('lt', lt);
counterpart.setSeparator('.');

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
