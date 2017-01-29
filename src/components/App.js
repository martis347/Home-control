import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Navigation from '../containers/NavigationContainer';
import {TranslatorProvider} from "react-translate"

class App extends React.Component {

  translations = {
    locale: "en",
    NavigationContainer: {
      HOME: "Namai",
      CLOCK: "Laikrodis",
      CONTROLS: "Valdikliai",
      ABOUT: "Kontaktai"
    },
  };

  render() {
    return (
      <TranslatorProvider translations={this.translations}>
        <div>
          <Navigation />
          {this.props.children}
        </div>
      </TranslatorProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect()(App);
