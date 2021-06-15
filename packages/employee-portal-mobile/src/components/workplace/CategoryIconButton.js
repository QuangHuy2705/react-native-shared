import React from 'react';

import {Image, Text, TouchableOpacity, View} from "react-native";

const CategoryIconButton = ({
							title,
							onPress,
							icon
						}) => {
	return (
		<TouchableOpacity onPress={() => onPress()}>
			<View style={{
				flexDirection: "column",
				alignItems: "center",
				padding: 8,
				borderRadius: 10,
				borderColor: '#E5E5E5',
				borderWidth: 1,
				height: 82,
				width:80,
			}}>

				{icon}
				<Text style={{
					marginTop: 8,
					fontSize: 13,
					color: "#4a4a4a",
					// maxWidth: 75,
					textAlign: "center"
				}}>{title}</Text>
			</View>
		</TouchableOpacity>);
};
export default CategoryIconButton
