import React from 'react';
import Translate from 'react-translate-component';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Translate content={'HomePage.HOME'} component="h1"/>
        <Translate content={'HomePage.DESCRIPTION'} component="p"/>
      </div>
    );
  }
}

export default HomePage;
