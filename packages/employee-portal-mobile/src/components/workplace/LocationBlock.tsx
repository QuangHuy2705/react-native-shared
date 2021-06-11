import {ImageBackground, StyleProp, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
// @ts-ignore
import React from "react";
import {LocationData} from "../../../../employee-portal-shared/src/types/LocationData";
import PRImages from "../../constants/PRImages";
import PRColors from "../../constants/PRColors";

const BookButton = ({onPress}) => {
	return <TouchableOpacity
		onPress={onPress}
		style=
			{{
				backgroundColor: 'rgba(39, 174, 96, 0.15)', borderRadius: 28
				, padding: 8, paddingVertical: 6
			}}>
		<Text style={{color: PRColors.success}}>Book</Text>
	</TouchableOpacity>
}
const DirectButton = ({onPress}) => {
	return <TouchableOpacity
		onPress={onPress}
		style=
			{{
				backgroundColor: 'rgba(241, 90, 34, 0.15)', borderRadius: 28
				, padding: 8, paddingVertical: 6
			}}>
		<Text style={{color: PRColors.primary}}>Direct</Text>
	</TouchableOpacity>
}
const LocationBlock = ({
						   variant,
						   image,
						   location,
						   style,
						   onDirect,
						   onBook
					   }: {
	variant: number,
	image?, location: LocationData, // @ts-ignore
	style?: StyleProp, onDirect?: Function, onBook?: Function
}) => {
	return <View style={{...styles.row, ...style}}>
		<Image
			style={{
				...styles.image
			}}
			resizeMode='cover'
			source={image ? image : PRImages.roomExample}/>
		<View style={{
			flex: 1, marginLeft: 16, flexDirection: 'row'
			, justifyContent: 'space-between'
		}}>

			<View style={{justifyContent: "center"}}>
				<Text style={{fontSize: 13, fontWeight: '600', height: 20}}>{location.name}</Text>
				<Text style={{fontSize: 12, height: 18, color: '#919191'}}>{location.path}</Text>
				<Text style={{fontSize: 12, height: 18, color: '#919191'}}>{location.desc}</Text>
			</View>
			{variant === 1 &&
			<View>
				{onDirect && <DirectButton onPress={onDirect}/>}
				{onBook && <BookButton onPress={onBook}/>}
			</View>
			}

		</View>
	</View>
}
export default LocationBlock


const styles = StyleSheet.create({
	image: {
		height: 68,
		width: 68,
		borderRadius: 10,
		justifyContent: "center"
	},
	row: {
		flexDirection: 'row',
		padding: 16,
	},

});

