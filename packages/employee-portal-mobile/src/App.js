import React from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import MainWrapper from '~/ui/layout/MainWrapper';
import LogInScreen from '~/screens/LogIn'

import AppNavigator from './navigation/AppNavigator';

export default function App() {
	const [user, setUser] = React.useState(null);

	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			{user
				? (
					<MainWrapper>
						<AppNavigator />
						<KeyboardAvoidingView
							behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
						/>
					</MainWrapper>
				) : (
					<LogInScreen onSignedIn={setUser} />
				)
			}
		</SafeAreaProvider>
	);
}
