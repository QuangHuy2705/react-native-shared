import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import React from "react";
import { IconButton } from 'react-native-paper'
import { PRStyles } from "../../constants/PRStyles";
import PRColors from "../../constants/PRColors";
const Card = ({ style, title, children, seeMore: seeMore }: { style?: ViewStyle, title?, children?, seeMore?}) => {
	return <View style={
		{
			...styles.card,
			...PRStyles.boxShadow,
			...style,
		}}>
		{title && <Text style={{ ...styles.cardTitle }}>{title}</Text>}
		{children}
		{seeMore && <View>
			<TouchableOpacity
				onPress={() => console.log("see more")}
				style=
				{{
					flexDirection: 'row',
					justifyContent: "center",
					alignContent: "center",
					alignItems: "center",
					height: 42
				}}>

				<Text style={{ color: PRColors.primary, fontSize: 13 }}>See more</Text>
				<IconButton icon='chevron-down' color={PRColors.primary} size={16} style={{ marginLeft: -2 }} />
			</TouchableOpacity>
		</View>
		}

	</View >
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
});
export default Card
