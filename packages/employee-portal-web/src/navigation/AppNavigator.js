import React from 'react';
import { createBrowserHistory as createHistory } from 'history';
import { Router } from 'react-router';
import MainWrapper from '~/ui/layout/MainWrapper';
import View from '~/ui/primitives/View';
import Routes from './routes';
import SideBar from '../components/layout/SideBar';

const history = createHistory();

const AppNavigator = () => (
	<Router history={history}>
		<View flex={1} flexDirection='row'>
			<SideBar />
			<MainWrapper>
				<Routes />
			</MainWrapper>
		</View>
	</Router>
);

export default AppNavigator;
