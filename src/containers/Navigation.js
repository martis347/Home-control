import React, {PropTypes} from 'react';
import NavigationItem from '../components/navigation/NavigationItem';
import NavigationComponent from '../components/navigation/NavigationComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as navigationActions from '../actions/navigationActions';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation(){
    this.props.actions.toggle();
  }

  render() {
    return (
      <div onMouseEnter={this.toggleNavigation} onMouseLeave={this.toggleNavigation}>
        <NavigationComponent expand={this.props.expand} >
          <NavigationItem link="" text="Home" expand={this.props.expand} glyphicon="glyphicon-home" />
          <NavigationItem link="link1" text="Clock" expand={this.props.expand} glyphicon="glyphicon-time" />
          <NavigationItem link="link2" text="Controls" expand={this.props.expand} glyphicon="glyphicon-flash" />
          <NavigationItem link="link3" text="About" expand={this.props.expand} glyphicon="glyphicon-user" />
        </NavigationComponent>
      </div>
    );
  }
}

Navigation.propTypes = {
  actions: PropTypes.object.isRequired,
  expand: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    expand: state.navigation.expand
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(navigationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
