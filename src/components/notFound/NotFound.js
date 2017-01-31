import React, {PropTypes} from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <img className={this.props.params.className} src={this.props.params.image}/>
      </div>
    );
  }
}

NotFound.propTypes = {
  params: PropTypes.object.isRequired
};

export default NotFound;
