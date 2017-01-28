import React, {PropTypes} from 'react';

class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.expand = this.props.expand;
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.expand != nextProp.expand) {
      this.setState({expand: nextProp.expand});
    }
  }

  children() {
    return this.props.children;
  }

  render() {
    return (
      <div className={this.props.expand ? 'sidenav expand' : 'sidenav'}>
        {this.children()}
      </div>
    );
  }
}

NavigationComponent.propTypes = {
  expand: PropTypes.bool.isRequired,
  children: PropTypes.array
};

export default NavigationComponent;
