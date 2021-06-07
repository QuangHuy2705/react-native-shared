import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootStack } from './routes';

const AppContainer = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);

export default AppContainer;
