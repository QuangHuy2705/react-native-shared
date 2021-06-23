import React from 'react';

import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

import { Platform, KeyboardAvoidingView } from 'react-native';
import connect from '~/shared/redux/connect';
import { Actions } from '~/shared/redux/modules/auth';

import MainWrapper from '~/ui/layout/MainWrapper';
import LogInScreen from '~/screens/LogIn'

import AppNavigator from '~/navigation/AppNavigator';

function App({ auth, logIn }) {
	const { isSignedIn } = auth;
	console.log(auth);

	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			{isSignedIn
				? (
					<MainWrapper>
						<AppNavigator />
						<KeyboardAvoidingView
							behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
						/>
					</MainWrapper>
				) : (
					<LogInScreen auth={auth} onSignedIn={logIn} />
				)}
		</SafeAreaProvider>
	);
}

const mapStateToProps = state => ({
	auth: state.auth
});

const mapDispatchToProps = {
	logIn: Actions.logIn
};

const ConnectedApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default ConnectedApp;
