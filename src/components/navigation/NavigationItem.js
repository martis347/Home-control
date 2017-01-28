import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class NavigationItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: false
    };
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.expand != nextProp.expand) {
      this.setState({expand: nextProp.expand});
    }
  }

  render() {
    return (
      <div className="naviItem">
        <Link to={"/" + this.props.link}>
          <span className={this.props.glyphicon}/>
          {this.state.expand && this.props.text}
        </Link>
      </div>
    );
  }
}

NavigationItem.propTypes = {
  expand: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  glyphicon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default NavigationItem;
