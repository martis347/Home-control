import React, {PropTypes} from 'react';
import NavigationItem from '../components/navigation/NavigationItem';
import NavigationComponent from '../components/navigation/NavigationComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as navigationActions from '../actions/navigationActions';
import {Swipeable} from 'react-touch';
import {translate} from "react-translate";

@translate("NavigationContainer")
class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation(close) {
    this.props.actions.toggle(close);
  }

  render() {
    const {t} = this.props;

    return (
      <Swipeable onSwipeRight={() => this.toggleNavigation(false)}>
        <div
          onMouseEnter={() => this.toggleNavigation(false)}
          onMouseLeave={() => this.toggleNavigation(true)}
          onClick={() => this.toggleNavigation(true)}
        >
          <NavigationComponent expand={this.props.expand}>
            <NavigationItem link="" text={t("HOME")} expand={this.props.expand} glyphicon="glyphicon-home"/>
            <NavigationItem link="clock" text={t("CLOCK")} expand={this.props.expand} glyphicon="glyphicon-time"/>
            <NavigationItem link="link2" text={t("CONTROLS")} expand={this.props.expand} glyphicon="glyphicon-flash"/>
            <NavigationItem link="link3" text={t("ABOUT")} expand={this.props.expand} glyphicon="glyphicon-user"/>
          </NavigationComponent>
        </div>
      </Swipeable>
    );
  }
}

NavigationContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  expand: PropTypes.bool.isRequired,
  t: PropTypes.object.isRequired
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
