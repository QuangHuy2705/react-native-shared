// @ts-ignore
import React, { useEffect, useState } from 'react';
// @ts-ignore
import Container from '~/ui/layout/Container';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	FlatList,
	ScrollView,
} from "react-native";
import Icon from '~/ui/common/Icon/index.native';
import { useNavigation } from '@react-navigation/native';
import EnvironmentBlock from '~/components/Workplace/EnvironmentBlock';
import { FixedBottom } from '~/components/Workplace/FixedBottom';
import ImageHeader from '~/components/Workplace/ImageHeader';
import LocationBlock from '~/components/Workplace/LocationBlock';
import PRColors from '~/constants/PRColors';
import PRImages from '~/constants/PRImages';
import Card from '~/components/Workplace/Card';
import UserList from '~/components/Workplace/UserList';
import { PrimaryButton2 } from '~/components/common/Button/PrimaryButton';

const LocationBookingScreen = ({ route }) => {

	const [selectedLocation, setSelectedLocation] = useState(null);
	useEffect(() => {
		console.log("location", route.params.location)
		setSelectedLocation(route.params.location);
	}, [])
	const navigation = useNavigation();
	const [selectedDate, setSelectedDate] = useState('1');
	const days = [
		{ text1: "Today", text2: "Jun 3", id: "1" },
		{ text1: "Tomorrow", text2: "Jun 4", id: "2" },
		{ text1: "Thursday", text2: "Jun 5", id: "3" },
		{ text1: "Friday", text2: "Jun 6", id: "4" },
		{ text1: "Saturday", text2: "Jun 7", id: "5" },
		{ text1: "Sunday", text2: "Jun 8", id: "6" },
	]
	const attendees = [
		{ avatar: PRImages.roomExample, id: 'dathn' },
		{ avatar: PRImages.roomExample, id: 'dathn2' },
	]
	const DaysList = () => {
		return <FlatList data={days}
			style={{
				marginTop: 24,
				marginBottom: 16,
				paddingBottom: 8,
			}}
			horizontal
			ItemSeparatorComponent={
				() => <View style={{ width: 8 }} />
			}
			renderItem={
				({ item }) => {
					return <PrimaryButton2
						active={selectedDate === item.id}
						title={item.text1 + "\n" + item.text2}
						onPress={() => {
							setSelectedDate(item.id);
							console.log('select day', item)
						}} />
				}
			} />
	}
	const Times = () => {
		return <>
			<PrimaryButton2
				active
				title={'9:00 AM'}
				onPress={() => {
					// console.log('select day', item)
				}} />
			<Text style={{ marginHorizontal: 16 }}>-</Text>
			<PrimaryButton2
				active
				title={'11:00 AM'}
				onPress={() => {
					// console.log('select day', item)
				}} />
		</>
	}

	return (
		<Container
			flex={1}
			justifyContent='center'
			alignItems='center'
		>
			<ScrollView style={{ flex: 1, width: '100%', backgroundColor: "white" }}>
				<ImageHeader />
				<EnvironmentBlock style={{ marginTop: -129 }} />
				<View style={{ marginTop: -40, marginBottom: 32 }}>
					<Card style={{ height: 100 }}>
						{
							selectedLocation && <LocationBlock variant={1}
								image={PRImages.locationMarker}
								location={selectedLocation}
								onDirect={() => navigation.navigate('Location', {
									category: 'Desk',
								})}
							/>
						}
					</Card>
					<View style={{ padding: 24 }}>
						<Text style={styles.segmentTitle}>CHOOSE A DAY</Text>
						<DaysList />
						<Text style={styles.segmentTitle}>TIME</Text>
						<View style={{ marginTop: 11, flexDirection: 'row', alignItems: 'center' }}>
							<Times />
						</View>
						<View style={{ marginTop: 24 }}>
							<PrimaryButton2
								icon={<Icon name={'format-align-left'} color={PRColors.icon} size={20} />}
								style={{ paddingVertical: 14 }}
								title={'Weekly meeting product design'}
								onPress={() => {
									// console.log('select day', item)
								}} />
						</View>
						<View style={{ marginTop: 24 }}>
							<UserList users={attendees} canAdd onSelected={(item) => {
								console.log(item)
							}} />
						</View>

					</View>
				</View>
			</ScrollView>
			<FixedBottom>
				<TouchableOpacity
					onPress={() => {
						console.log('confirm')
					}}
					style=
					{{
						marginHorizontal: 24,
						marginVertical: 16,
						backgroundColor: PRColors.primary,
						alignItems: 'center',
						borderRadius: 10,
						paddingVertical: 12,
						paddingHorizontal: 30,
					}}>
					<Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Confirm</Text>
				</TouchableOpacity>
			</FixedBottom>
		</Container>
	);
}

export default LocationBookingScreen
const styles = StyleSheet.create(
	{
		segmentTitle: {
			color: '#4F4F4F',
		}
	}
);



