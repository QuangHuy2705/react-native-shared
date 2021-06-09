import React from "react";
import {
	I18nManager,
	Platform,
	StyleProp, StyleSheet,
	Text,
	TextStyle,
	View, ViewStyle
} from "react-native";

import Dash from "react-native-dash";
import {Metrics} from "../../constants";

type PropsType = {
	dash?: boolean;
	style?: ViewStyle;
};
const PRDivider = (props: PropsType) => {
	return (
		props.dash ?
			<Dash style={{...props.style, ...styles.divider}}
				  dashColor="#dbdbde"/> :
			<View style={[styles.divider, props.style]}>
			</View>
	);
};
const styles = StyleSheet.create({
	divider: {
		alignSelf:'center',
		width: Metrics.deviceWidth - 32,
		marginTop: 4,
		height: 0.5,
		backgroundColor: "#BDBDBD"
	}
});

export default PRDivider;
