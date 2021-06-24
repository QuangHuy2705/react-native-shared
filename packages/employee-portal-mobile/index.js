/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native-get-random-values';

import { AppRegistry } from 'react-native';
import setup from 'employee-portal-shared/src/setup';
import App from './src/App';
import { name as appName } from './app.json';

const Root = setup(App);

AppRegistry.registerComponent(appName, () => Root);
