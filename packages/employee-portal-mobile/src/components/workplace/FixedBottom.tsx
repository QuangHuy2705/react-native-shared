import { PRStyles } from "../../constants/PRStyles";
import * as React from "react";
import { View } from "react-native";

export const FixedBottom = ({ children }) => {
	return <View style={{
		position: 'absolute',
		left: 0, right: 0, bottom: 0,
		backgroundColor: 'white',
		height: 100,
		...PRStyles.boxShadow
	}}>
		{children}
	</View>
}
