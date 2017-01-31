import React, {PropTypes} from 'react';
import NotFound from '../components/notFound/NotFound';
import {connect} from 'react-redux';

class NotFoundContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      pictures: [{
        className: "notFound-med",
        image: "https://s23.postimg.org/4wvbv1y4r/404.jpg"
      },
      {
        className: "notFound-lg",
        image: "https://s29.postimg.org/8w82k8hpz/Rawnet.png"
      },
      {
        className: "notFound-med",
        image: "https://s29.postimg.org/iolo539lz/404.jpg"
      }]
    };
  }


  render() {
    let randomNumber = Math.floor(Math.random() * 3);
    debugger;
    return (
      <div className>
        <NotFound params={this.state.pictures[randomNumber]}/>
      </div>
    );
  }
}

NotFoundContainer.propTypes = {
  changeLocale: PropTypes.func.isRequired
};


export default connect()(NotFoundContainer);
