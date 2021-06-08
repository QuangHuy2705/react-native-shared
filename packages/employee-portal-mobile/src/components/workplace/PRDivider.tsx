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
		width: Metrics.deviceWidth - 40,
		marginTop: 4,
		height: 1,
		backgroundColor: "#dbdbde"
	}
});

export default PRDivider;
