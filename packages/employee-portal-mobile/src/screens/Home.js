import React, { Component } from 'react';
import SharedHome from 'employee-portal-shared/src/screens/Home';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  onPressProfile = () => {
    this.props.navigation.navigate('Profile');
  }

  onToLogin = () => {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <SharedHome
        onToLogin={this.onToLogin}
        onPressProfile={this.onPressProfile}
      />
    );
  }
}
