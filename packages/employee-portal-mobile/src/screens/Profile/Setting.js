import React, { useRef } from 'react'
import Text from '~/ui/primitives/Text'
import Container from '~/ui/layout/Container';
import { TouchableOpacity } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Feather';

import connect from '~/shared/redux/connect';
import { Actions } from '~/shared/redux/modules/auth';

function Setting({ navigation, logOut }) {
	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={logOut}>
					<Icon style={{ marginRight: 15 }} size={21} name="log-out" />
				</TouchableOpacity>
			),
		});
	}, [navigation]);

	const refRBSheet = useRef();
	const options = [
		{
			name: 'Vietnamese',
			onPress: () => { },
		},
		{
			name: 'English',
			onPress: () => { }
		},
	];

	return (
		<Container p={'23px 0 0 16px'} flex={1}>
			<TouchableOpacity onPress={() => refRBSheet.current.open()}>
				<Container flexDirection='row'>
					<Icon name='globe' size={20} />
					<Container ml='12px'>
						<Text fontSize='17px' fontWeight={600}>Change Language</Text>
						<Text>English</Text>
					</Container>
				</Container>
			</TouchableOpacity>
			<RBSheet
				ref={refRBSheet}
				height={190}
				openDuration={250}
				dragFromTopOnly
				closeOnDragDown
				customStyles={{
					container: {
						borderTopRightRadius: 20,
						borderTopLeftRadius: 20,
						paddingLeft: 16
					},
				}}>
				<Text fontSize='17px' fontWeight={700}>
					Change language
				</Text>
				{options.map(({ name, onPress, icon }, idx) => (
					<TouchableOpacity
						onPress={onPress}
						key={name}>
						<Container borderColor='#A7A7A7' borderBottomWidth={idx === 0 ? 0.2 : 0} alignItems='center' p={'17px 0'} flexDirection='row'>
							{icon}
							<Text>{name}</Text>
						</Container>
					</TouchableOpacity>
				))}
			</RBSheet>
		</Container>
	)
}

const mapStateToProps = null;

const mapDispatchToProps = {
	logOut: Actions.logOut
};

const ConnectedSetting = connect(
	mapStateToProps,
	mapDispatchToProps
)(Setting);

export default ConnectedSetting;
