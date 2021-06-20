import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~/screens/Home';

import WorkScreen from '~/screens/Work';

// TODO: Workplace screen
import WorkplaceScreen from '~/screens/Workplace';

// TODO: Profile screen
import ProfileScreen from '~/screens/Profile';
import ContactEdit from '~/screens/ContactEdit';

import BottomTabBar from './BottomTabBar';
import LocationDiscoverScreen from '~/screens/Workplace/LocationDiscover';
import LocationBookingScreen from '~/screens/Workplace/LocationBook';

const userData = {
	firstName: 'Luc',
	lastName: 'Mai Van',
	jobTitle: 'Designer',
	department: 'IoT',
	office: 'VNG Campus',
	seat: 'G-119',
	phoneNumber: '+84 383 708 182',
	email: 'maivanluc1597@gmail.com'
}


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
		</Tab.Navigator>
	);
}
