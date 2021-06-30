import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '~/components/Home/Main'
import GroupDetail from '~/components/Home/Group/GroupDetail'
import Notification from '~/screens/Notification';

function Home() {
	const Stack = createStackNavigator()

	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="Home" 
				options={{headerShown: false}} 
				component={Main} 
		/>
			<Stack.Screen	
				options={{headerShown: false}} 
				name="GroupDetail" 
				component={GroupDetail} 
			/>	
		</Stack.Navigator>
	)
}

export default Home;
