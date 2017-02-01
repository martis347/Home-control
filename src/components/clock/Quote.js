import React, {PropTypes} from 'react';

class Quote extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.text}
      </div>
    );
  }
}

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default Quote;
