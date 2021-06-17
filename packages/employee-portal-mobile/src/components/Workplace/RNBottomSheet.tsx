import React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

const RNBottomSheet = ({ innerRef, children }) => {
	const renderContent = () => (
		<View style={{ height: '100%' }}>
			<View style={{
				marginTop: 20,
				backgroundColor: 'white',
				flexDirection: 'column',
				borderRadius: 20,
				height: '100%',
				...styles.boxShadow,
			}}>
				<View style={{
					alignSelf: 'center',
					width: 45, height: 4, backgroundColor: '#A4A4A4', borderRadius: 10, margin: 8, opacity: .3
				}}></View>
				<View>
					{children}
				</View>
			</View>
		</View>
	);
	return (
		<BottomSheet
			initialSnap={1}
			ref={innerRef}
			snapPoints={[350, 0]}
			renderContent={renderContent}
		/>
	);
}
export default RNBottomSheet

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "rgb(32, 32, 32)",
		shadowOffset: {
			width: 4,
			height: 4,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 6
	}
});
