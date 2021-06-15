// @ts-ignore
import React, {PureComponent, useEffect, useRef, useState} from 'react';
// @ts-ignore
import Container from 'employee-portal-shared/src/components/layout/Container';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	FlatList,
	SafeAreaView,
} from "react-native";
import SearchBlock from "../components/workplace/SearchBlock";
import PRColors from "../constants/PRColors";
import {WebView} from 'react-native-webview';
import PRImages from "../constants/PRImages";
import {useNavigation} from "@react-navigation/native";
import {current_location} from "../mock/Data";
import LocationBlock from "../components/workplace/LocationBlock";
import RNBottomSheet from "../components/workplace/RNBottomSheet";


const category = ['Desk', 'Meeting Room', 'Coffee', 'Gyms', 'Coworker', 'Pharmacy', 'Library', 'Toilet']
const LocationDiscoverScreen = ({route}) => {
	const navigation = useNavigation();
	const [selectedLocation, setSelectedLocation] = useState(null);
	const [isDirecting, setIsDirecting] = useState(false);
	const refAcctionSheet = useRef();
	const [selectedCategory, setSelectedCategory] = useState(category[0]);
	useEffect(() => {
		setSelectedCategory(route.params.category);
	}, [])
	useEffect(() => {
		if (selectedLocation)
			openActionSheet();
	}, [selectedLocation])
	const openActionSheet = () => {
		if (refAcctionSheet.current) {
			refAcctionSheet.current.snapTo(0);
		}
	}
	const closeActionSheet = () => {
		if (refAcctionSheet.current) {
			refAcctionSheet.current.close();
		}
	}
	const Categories = () => {
		return <FlatList
			horizontal
			data={category}
			getItemLayout={(data, index) => (
				{length: 50, offset: 50 * index, index}
			)}
			keyExtractor={item => item}
			initialScrollIndex={category.findIndex(value => value === selectedCategory)}
			renderItem={({item}) => {
				return <TouchableOpacity
					style={[styles.category, item === selectedCategory ? styles.selectCategory : {}]}
					onPress={() => {
						setSelectedCategory(item);
						setSelectedLocation(item);
						//TODO
						// openActionSheet();
					}}
				>
					<Text
						style={[{fontSize: 13}, item === selectedCategory ? {color: 'white'} : {color: "#A7A7A7"}]}>
						{item}
					</Text>
				</TouchableOpacity>
			}}/>
	}

	return (
		<Container
			flex={1}
			justifyContent='center'
			alignItems='center'
		>
			<RNBottomSheet innerRef={refAcctionSheet}>
				<LocationBlock
					variant={2}
					image={PRImages.locationMarker}
					location={current_location}
					onBook={() => {
						console.log("onBook")
						navigation.navigate('Booking', {
							location: current_location
						});
					}}
					onDirect={!isDirecting ? () => {
						console.log("onDirect")
						setIsDirecting(true)
						// closeActionSheet();
					} : false}
				/>
			</RNBottomSheet>
			<SafeAreaView style={{flex: 1, width: '100%', backgroundColor: 'white'}}>
				{/*TODO: change when directing*/}
				<SearchBlock/>
				<View style={{padding: 16}}>
					<Categories/>
				</View>
				<View style={styles.map}>
					<WebView source={{uri: 'https://map.google.com/'}}/>
				</View>
			</SafeAreaView>
		</Container>
	);
}

export default LocationDiscoverScreen
const styles = StyleSheet.create({
	map: {
		flex: 1,
		backgroundColor: "black"
	},
	category: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: PRColors.transparent,
		borderRadius: 40
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	selectCategory: {
		backgroundColor: 'black',
		color: 'white',
		borderColor: '#f15a22',
	},
});



