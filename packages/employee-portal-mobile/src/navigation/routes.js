import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '~/screens/Home';
import LocationDiscoverScreen from "~/screens/LocationDiscover";
import LocationBookingScreen from "~/screens/LocationBook";

import WorkScreen from '~/screens/Work';

import WorkplaceScreen from '~/screens/Workplace';

// TODO: Profile screen
import ProfileScreen from '~/screens/Profile';

import BottomTabBar from './BottomTabBar';

const Tab = createBottomTabNavigator();

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
				component={WorkplaceScreen}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				initialParams={{ user: 'me' }}
			/>
			<Tab.Screen
				name="Location"
				component={LocationDiscoverScreen}
				initialParams={{ user: 'me' }}
			/>
			<Tab.Screen
				name="Booking"
				component={LocationBookingScreen}
				initialParams={{ user: 'me' }}
			/>
		</Tab.Navigator >
	);
}
