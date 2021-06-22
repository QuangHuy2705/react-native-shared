import React, { PureComponent, useState } from 'react';
import View from '~/ui/primitives/View';
import ScrollView from '~/ui/common/ScrollView';
import styled from 'styled-components';
import Detail from '../components/Profile/Detail';
import Header from '../components/Profile/Header';
import { createStackNavigator } from '@react-navigation/stack';
import ContactEdit from './ContactEdit'
import Setting from './Setting'
import Avatar from 'employee-portal-shared/assets/images/avatar.png'

const Stack = createStackNavigator()

const CContainer = styled(View)`
	background: transparent;
`;

const Profile = (props) => {
	const {navigation} = props 
	const [user, setUser] = useState({avatar: Avatar})

	const onChangeAvatar = image => {
		setUser({avatar: {uri: image.path}})
	}

	return (
  		<CContainer
  			flex={1}
  		>
  			<ScrollView>
  				<Header onToSetting={() => navigation.navigate('Setting')} onSelectImage={onChangeAvatar} user={user}/>
  				<Detail onToContactEdit={() => navigation.navigate('ContactEdit')} />
  			</ScrollView>
  		</CContainer >
	)
}

export default class ProfileScreen extends PureComponent {

  render() {

		return (
			<Stack.Navigator>
				<Stack.Screen 
					name="Profile" 
					options={{headerShown: false}} 
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
