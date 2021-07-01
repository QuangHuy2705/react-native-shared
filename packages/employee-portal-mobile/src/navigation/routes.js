import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~/screens/Home';

import WorkScreen from '~/screens/Work';

import Notification from '~/screens/Notification';

import WorkplaceScreen from '~/screens/Workplace';

import ProfileScreen from '~/screens/Profile';

import BottomTabBar from './BottomTabBar';
import LocationDiscoverScreen from '~/screens/Workplace/LocationDiscover';
import LocationBookingScreen from '~/screens/Workplace/LocationBook';
import PostFormModal from '~/components/common/PostForm/FormModal';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function WorkplaceStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Workplace" component={WorkplaceScreen} options={{ headerMode: 'none', headerShown: false }} />
			<HomeStack.Screen name="Location" component={LocationDiscoverScreen} />
			<HomeStack.Screen name="Booking" component={LocationBookingScreen} />
		</HomeStack.Navigator>
	);
}

const AppStack = createStackNavigator()

const App = () => {

	return (
		<Tab.Navigator
			initialRouteName="Home"
			tabBar={BottomTabBar}
			mode="modal"
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
				component={WorkplaceStackScreen}
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
	)
}

export function RootStack() {
	return (
		<AppStack.Navigator mode='modal'>
			<AppStack.Screen options={{ headerShown: false }} name={'App'} component={App} />
			<AppStack.Screen name='PostFormModal' component={PostFormModal} />
		</AppStack.Navigator>
	)
}
