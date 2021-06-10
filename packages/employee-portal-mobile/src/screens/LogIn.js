import React, { Component } from 'react';
import SharedLogIn from 'employee-portal-shared/src/screens/LogIn';

export default class LogIn extends Component {
  static navigationOptions = {
    title: 'LogIn',
  };

  render() {
    return (
      <SharedLogIn
      />
    );
  }
}
