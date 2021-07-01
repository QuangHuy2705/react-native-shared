import React from 'react';

import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

import { Platform, KeyboardAvoidingView } from 'react-native';
import connect from '~/shared/redux/connect';
import { Actions } from '~/shared/redux/modules/auth';

import MainWrapper from '~/ui/layout/MainWrapper';
import LogInScreen from '~/screens/LogIn'

import AppNavigator from '~/navigation/AppNavigator';

// Module CodePush use for release test version on Microsoft AppCenter 
import CodePush from '../node_modules/react-native-code-push';

function App({ auth, logIn }) {
	const { isSignedIn } = auth;
	
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
	logIn: Actions.logInByAzure
};

const ConnectedApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

let codePushOptions = {
	checkFrequency: CodePush.CheckFrequency.ON_APP_START,
	installMode: CodePush.InstallMode.IMMEDIATE
};

export default CodePush(codePushOptions)(ConnectedApp);
