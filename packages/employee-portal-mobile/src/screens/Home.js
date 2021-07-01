import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';

import Header, { Tabs } from '~/components/Home/Header';
import Feed from '~/containers/Home/Feed';
import Event from '~/components/Home/Event';

const Container = styled(View)`
	background: transparent;
`;
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
