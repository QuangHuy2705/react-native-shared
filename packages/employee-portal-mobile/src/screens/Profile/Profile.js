import React, { PureComponent } from 'react';

import Profile from '~/containers/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import ContactEdit from './ContactEdit'
import Setting from './Setting'

const Stack = createStackNavigator()

export default class ProfileScreen extends PureComponent {

	render() {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="Profile"
					options={{ headerShown: false }}
					component={Profile}
				/>
				<Stack.Screen
					options={{ title: 'Setting' }}
					name="Setting"
					component={Setting}
				/>
				<Stack.Screen
					options={{ title: 'Personal contact' }}
					name="ContactEdit" component={ContactEdit}
				/>
			</Stack.Navigator>
		)
	}
}
