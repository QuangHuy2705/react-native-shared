import { StyleProp, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
// @ts-ignore
import React from "react";
import { LocationData } from "../../../../employee-portal-shared/src/types/LocationData";
import PRImages from "~/constants/PRImages";
import Icon from '~/ui/common/Icon/index.native';
import { PrimaryButton } from "~/components/common/Button/PrimaryButton";
import PRColors from "~/constants/PRColors";


const BookButton = ({ onPress }) => {
	return <TouchableOpacity
		onPress={onPress}
		style=
		{{
			backgroundColor: 'rgba(39, 174, 96, 0.15)', borderRadius: 28
			, padding: 8, paddingVertical: 6
		}}>
		<Text style={{ color: PRColors.success }}>Book</Text>
	</TouchableOpacity>
}
const DirectButton = ({ onPress }) => {
	return <TouchableOpacity
		onPress={onPress}
		style=
		{{
			backgroundColor: 'rgba(241, 90, 34, 0.15)', borderRadius: 28
			, padding: 8, paddingVertical: 6
		}}>
		<Text style={{ color: PRColors.primary }}>Direct</Text>
	</TouchableOpacity>
}

type propType = {
	variant: number,
	image?,
	location: LocationData, // @ts-ignore
	style?: StyleProp,
	onDirect?: Function | Boolean,
	onBook?: Function | Boolean
}

const LocationBlock = ({
	variant,
	image,
	location,
	style,
	onDirect,
	onBook
}: propType) => {
	return <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 10, ...style }}>
		<View style={{
			flexDirection: 'row'

		}}>
			<Image
				style={{
					...styles.image
				}}
				resizeMode='cover'
				source={image ? image : PRImages.roomExample} />
			<View style={styles.row}>
				{variant === 1 &&
					<>
						<View style={{ justifyContent: "center" }}>
							<Text style={{ ...styles.locationText1 }}>{location.name}</Text>
							<Text style={{ ...styles.locationText2 }}>{location.path}</Text>
							<Text style={{ ...styles.locationText2 }}>{location.desc}</Text>
						</View>
						<View>
							{onDirect && <DirectButton onPress={onDirect} />}
							{onBook && <BookButton onPress={onBook} />}
						</View>
					</>
				}
				{variant === 2 &&
					<>
						<View style={{ justifyContent: "center" }}>
							<Text style={{ ...styles.locationText1 }}>{location.name}</Text>
							<Text style={{ ...styles.locationText2 }}>{location.path} | {location.desc}</Text>
							<Text style={{ ...styles.locationText3 }}>Available Now</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<Icon name={'directions-walk'} color={'#ABABAB'} size={22} />
							<Text style={{ ...styles.environmentInfoText, paddingTop: 3 }}> 2 min</Text>
						</View>
					</>
				}
			</View>
		</View>
		{variant === 2 && <View style={{
			flexDirection: 'row',
			paddingHorizontal: 16,
		}}>
			{onDirect && <>
				<PrimaryButton title={'Directions'} onPress={onDirect} />
				<View style={{ width: 16 }}></View></>}
			{onBook && <PrimaryButton title={'Book this room'} onPress={onBook} />}
		</View>
		}
	</View>
}
export default LocationBlock


const styles = StyleSheet.create({
	locationText1: {
		fontSize: 13, fontWeight: "600", height: 20
	},
	locationText2: {
		fontSize: 12, height: 18, color: '#919191'
	},
	locationText3: {
		fontSize: 13, height: 18, color: PRColors.success
	},
	image: {
		height: 68,
		width: 68,
		borderRadius: 10,
		justifyContent: "center"
	},
	row: {
		flex: 1,
		marginLeft: 16,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	environmentInfoText: {
		color: '#111111',
		fontWeight: '600',
		alignItems: 'center',
	},
});
