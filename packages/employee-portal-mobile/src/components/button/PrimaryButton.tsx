import {StyleSheet, Text, TouchableOpacity} from "react-native";
import PRColors from "../../constants/PRColors";
import React from "react";

export const PrimaryButton = ({title, style, onPress}: { title, style?, onPress? }) => {
	return <TouchableOpacity
		onPress={onPress}
		style=
			{{
				backgroundColor: PRColors.primary,
				alignItems: 'center',
				borderRadius: 10,
				height: 36,
				flexGrow: 1,
				flexShrink: 1,
				flexBasis: 0,
				paddingVertical: 7,
				...style
			}}>
		<Text style={{color: 'white', fontWeight: '600'}}>{title}</Text>
	</TouchableOpacity>
}
export const PrimaryButton2 = ({title, style, onPress, active, icon}: { title, style?, onPress?, active?, icon? }) => {
	return <TouchableOpacity
		onPress={onPress}
		style=
			{{
				flexDirection: 'row',
				backgroundColor: active ? 'rgba(241, 90, 34, 0.1)' : 'white',
				alignItems: 'center',
				borderRadius: 10,
				borderColor: active ? '#F5A689' : '#E5E5E5',
				borderWidth: 1,
				// height: 60,
				paddingVertical: 7,
				paddingHorizontal: 16,
				...style
			}}>
		{icon}
		<Text style={{
			textAlign: 'center',
			fontSize: 16,
			paddingHorizontal: 14,
			color: active ? PRColors.primary : '#111111'
		}}>{title}</Text>
	</TouchableOpacity>
}
export const CircleButton = ({style, onPress, border, icon}:
								 { style?, onPress?, border?, icon? }) => {
	const styles = StyleSheet.create({
		border: {
			borderRadius: 100,
			borderWidth: 1,
			borderColor: PRColors.icon,
			borderStyle: 'dashed',
		},

	});

	return <TouchableOpacity
		onPress={onPress}
		style=
			{[border ? styles.border : {}, {
				width: 32,
				height: 32,
				justifyContent: 'center',
				...style
			}]}>
		{icon}
	</TouchableOpacity>
}
