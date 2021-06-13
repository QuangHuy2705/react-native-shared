import React from "react";
import {
	StyleSheet,
	View, ViewStyle
} from "react-native";

import Dash from "react-native-dash";
import PRMetrics from "../../constants/PRMetrics";

type PropsType = {
	dash?: boolean;
	style?: ViewStyle;
};
const PRDivider = (props: PropsType) => {
	return (
		props.dash ?
			<Dash style={{ ...props.style, ...styles.divider }}
				dashColor="#dbdbde" /> :
			<View style={[styles.divider, props.style]}>
			</View>
	);
};
const styles = StyleSheet.create({
	divider: {
		alignSelf: 'center',
		width: PRMetrics.deviceWidth - 32,
		marginTop: 4,
		height: 0.5,
		backgroundColor: "#BDBDBD"
	}
});

export default PRDivider;
