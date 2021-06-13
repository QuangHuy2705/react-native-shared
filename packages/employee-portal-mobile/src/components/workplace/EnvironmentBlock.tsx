import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { current_location } from "../../mock/Data";
// @ts-ignore
import React from "react";
// @ts-ignore
import Icon from 'employee-portal-shared/src/components/common/Icon';
import LinearGradient from 'react-native-linear-gradient';
import PRColors from "../../constants/PRColors";

const EnvironmentBlock = ({ style }: { style?: StyleProp<ViewStyle> }) => {
	return <LinearGradient start={{ x: 0, y: 0 }}
		end={{ x: 0, y: 1 }}
		colors={[PRColors.transparent, 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.6)']}
		style={[styles.environmentInfo, style]}>

		<View style={{}}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Icon name={'location-pin'} color={'white'} />
				<Text style={{ ...styles.environmentInfoText, fontSize: 14 }}>{current_location.name}</Text>
			</View>
			<View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
				<Icon name={'wb-sunny'} color={'white'} />
				<Text style={{ ...styles.environmentInfoText }}>27 C </Text>
				<Icon name={'wb-sunny'} color={'white'} />
				<Text style={{ ...styles.environmentInfoText }}>33 AQI</Text>
			</View>
		</View>
		<View style={{}}>
			<Text style={{
				...styles.environmentInfoText, textAlign: 'right',
				color: PRColors.success, fontSize: 14
			}}>Available now</Text>
			<View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', justifyContent: "flex-end" }}>
				<Icon name={'directions-walk'} color={'white'} size={22} />
				<Text style={{ ...styles.environmentInfoText }}> 2 min</Text>
			</View>
		</View>
	</LinearGradient>
}
const styles = StyleSheet.create({
	environmentInfo: {
		height: 128,
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: 'space-between',
		paddingHorizontal: 24,
	},
	environmentInfoText: {
		color: 'white',
		fontWeight: '600',
	},

});
export default EnvironmentBlock
