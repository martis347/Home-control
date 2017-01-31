import React from 'react';
import NotFoundPage1 from './NotFoundPage1';
import NotFoundPage2 from './NotFoundPage2';
import NotFoundPage3 from './NotFoundPage3';

class NotFoundPage extends React.Component {

  render() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;


    return (
      <div>
        {randomNumber == 1 && <NotFoundPage1/>}
        {randomNumber == 2 && <NotFoundPage2/>}
        {randomNumber == 3 && <NotFoundPage3/>}
      </div>
    );
  }
}

export default NotFoundPage;
