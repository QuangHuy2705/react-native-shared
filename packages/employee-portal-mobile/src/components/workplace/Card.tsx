import {StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import React from "react";
import { IconButton } from 'react-native-paper'
import PRDivider from "./PRDivider";
import PRColors from "../../constants/PRColors";

const Card = ({style, title, children, seemore}: { style?: StyleProp<ViewStyle>, title?, children?, seemore? }) => {
	return <View style={
		{
			...styles.card,
			...styles.boxShadow,
			...style,
		}}>
		{title && <Text style={{...styles.cardTitle}}>{title}</Text>}
		{children}
		{seemore && <View>
			<TouchableOpacity
				onPress={()=> console.log("see more")}
				style=
								  {{
									  flexDirection: 'row',
									  justifyContent: "center",
									  alignContent: "center",
									  alignItems: "center",
									  height: 42
								  }}>

				<Text style={{color: PRColors.primary, fontSize:13}}>See more</Text>
				<IconButton icon='chevron-down' color={PRColors.primary} size={16} style={{ marginLeft:-2}}/>
			</TouchableOpacity>
		</View>}

	</View>
}
const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
		marginTop: 16,
		marginHorizontal: 8,
		zIndex: 10,
		borderRadius: 10,
	},
	cardTitle: {
		paddingTop: 16,
		paddingLeft: 16,
		color: '#4F4F4F',
	},
	boxShadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6
	}
});
export default Card
