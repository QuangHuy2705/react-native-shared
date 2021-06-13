import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// TODO: Home screen
import HomeScreen from '~/screens/Work';

import LogIn from '~/screens/LogIn'

import WorkScreen from '~/screens/Work';

// TODO: Workplace screen
import WorkplaceScreen from '~/screens/Work';

// TODO: Profile screen
import ProfileScreen from '~/screens/Profile';

import BottomTabBar from './BottomTabBar';

const Tab = createBottomTabNavigator();

export function RootStack() {
	const [user, setUser] = React.useState(null);

	return user ? (
		<Tab.Navigator
			initialRouteName="Home"
			tabBar={BottomTabBar}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
			/>
			<Tab.Screen
				name="Work"
				component={WorkScreen}
			/>
			<Tab.Screen
				name="Workplace"
				component={WorkplaceScreen}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				initialParams={{ user: 'me' }}
			/>
		</Tab.Navigator>
	) : (
		<LogIn onSignedIn={setUser} />
	);
}
