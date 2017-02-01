import React, {PropTypes} from 'react';

class RandomComic extends React.Component {
  render() {
    return (
      <div className="comic">
        <img src={this.props.image} style={{width: 'inherit'}}/>
      </div>
    );
  }
}

RandomComic.propTypes = {
  image: PropTypes.string.isRequired
};

export default RandomComic;
