import React, {PropTypes} from 'react';
import NavigationItem from '../components/navigation/NavigationItem';
import NavigationComponent from '../components/navigation/NavigationComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as navigationActions from '../actions/navigationActions';
import {Swipeable} from 'react-touch';

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation(close) {
    this.props.actions.toggle(close);
  }

  render() {
    return (
      <Swipeable onSwipeRight={() => this.toggleNavigation(false)}>
        <div
          onMouseEnter={() => this.toggleNavigation(false)}
          onMouseLeave={() => this.toggleNavigation(true)}
          onClick={() => this.toggleNavigation(true)}
        >
          <NavigationComponent expand={this.props.expand}>
            <NavigationItem link="home" text={"HOME"} expand={this.props.expand} glyphicon="glyphicon-home"/>
            <NavigationItem link="clock" text={"CLOCK"} expand={this.props.expand} glyphicon="glyphicon-time"/>
            <NavigationItem link="dashboard" text={"CLOCK_NEW"} expand={this.props.expand} glyphicon="glyphicon-dashboard"/>
            <NavigationItem link="control" text={"CONTROLS"} expand={this.props.expand} glyphicon="glyphicon-flash"/>
            <NavigationItem link="cars" text={"CAR_PRICES"} expand={this.props.expand} glyphicon="glyphicon-euro"/>
          </NavigationComponent>
        </div>
      </Swipeable>
    );
  }
}

NavigationContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  expand: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
