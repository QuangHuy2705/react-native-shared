import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~/screens/Home';

import WorkScreen from '~/screens/Work';

import Notification from '~/screens/Notification';

import WorkplaceScreen from '~/screens/Workplace';

<<<<<<< HEAD
import ProfileScreen from '~/screens/Profile';
=======
// TODO: Profile screen
import ProfileScreen from '~/screens/Profile/Profile';
>>>>>>> 9c4c8b9 (refstructure profile screen)

import BottomTabBar from './BottomTabBar';
import LocationDiscoverScreen from '~/screens/Workplace/LocationDiscover';
import LocationBookingScreen from '~/screens/Workplace/LocationBook';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function WorkplaceScreenStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Workplace" component={WorkplaceScreen} />
			<HomeStack.Screen name="Location" component={LocationDiscoverScreen} />
			<HomeStack.Screen name="Booking" component={LocationBookingScreen} />
		</HomeStack.Navigator>
	);
}

export function RootStack() {
	return (
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
				component={WorkplaceScreenStackScreen}
			/>
			<Tab.Screen
				options={{
					headerShown: false
				}}
				name="Profile"
				component={ProfileScreen}
			/>
			<Tab.Screen
				options={{
					headerShown: false
				}}
				name="Notification"
				component={Notification}
			/>
		</Tab.Navigator>
	);
}
