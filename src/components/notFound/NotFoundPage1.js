import React from 'react';
import Translate from 'react-translate-component';

class NotFoundPage1 extends React.Component {
  render() {
    return (
      <div>
        <h1><strong><Translate content={'NotFoundPage.ERROR'}/> {404}</strong></h1>
        <Translate content={'NotFoundPage.MISSING_PAGE'} component="h2"/>
        <img src="http://files.sharenator.com/fun_with404_errors_78_uphaa_com-s450x329-82547.jpg"/>
      </div>
    );
  }
}

export default NotFoundPage1;