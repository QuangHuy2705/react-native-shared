import React from 'react';

import { Dimensions } from 'react-native';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';
import Text from '~/ui/primitives/Text';

const Container = styled(View)`
	padding: 8px 16px;
	align-items: center;
	flex-direction: row;
`;

const Payload = styled(View)`
	flex: 1;
	margin-left: 16px;
	margin-right: 8px;
`;

const ActionContainer = styled(View)`
	align-self: flex-start;
`;

const Time = styled(Text)`
	margin-top: 4px;
	color: #4F4F4F;
	font-size: 11px;
`;

export default function ItemContainer({ iconRender, time, children, actionRender, onPress }) {
	return (
		<Touchable onPress={onPress}>
			<Container>
				{iconRender()}
				<Payload>
					<Text>
						{children}
					</Text>
					<View>
						<Time>{time}</Time>
					</View>
				</Payload>
				{actionRender && (
					<ActionContainer>
						{actionRender()}
					</ActionContainer>
				)}
			</Container>
		</Touchable>
	)
}