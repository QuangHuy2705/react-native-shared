// @ts-ignore
import React, {PureComponent, useEffect, useState} from 'react';
// @ts-ignore
import Container from 'employee-portal-shared/src/components/layout/Container';
import {View, StyleSheet, Text, TouchableOpacity, FlatList, SafeAreaView, ImageBackground} from "react-native";
import SearchBlock from "../components/workplace/SearchBlock";
import PRColors from "../constants/PRColors";
import {WebView} from 'react-native-webview';
import PRImages from "../constants/PRImages";
import {useNavigation} from "@react-navigation/native";


const category = ['Desk', 'Meeting Room', 'Coffee', 'Gyms', 'Coworker', 'Pharmacy', 'Library', 'Toilet']
const LocationDiscoverScreen = ({route}) => {
	const navigation = useNavigation();
	const [selectedCategory, setSelectedCategory] = useState(category[0]);
	useEffect(() => {
		setSelectedCategory(route.params.category);
		// console.log('category', route, route.params.category)
	}, [])
	return (
		<Container
			flex={1}
			justifyContent='center'
			alignItems='center'
		>
			<SafeAreaView style={{flex: 1, width: '100%', backgroundColor: 'white'}}>
				<SearchBlock/>
				<View style={{padding: 16}}>
					<FlatList
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
								onPress={() => setSelectedCategory(item)}
							>
								<Text
									style={[{fontSize: 13}, item === selectedCategory ? {color: 'white'} : {color: "#A7A7A7"}]}>
									{item}
								</Text>
							</TouchableOpacity>
						}}/>
				</View>
				<View style={styles.map}>
					{/*<ImageBackground*/}
					{/*	style={{*/}
					{/*		height: '100%',*/}
					{/*		justifyContent: "center"*/}
					{/*	}}*/}
					{/*	resizeMode='cover'*/}
					{/*	source={PRImages.roomExample}/>*/}
					{/*<Leaflet/>*/}
					<WebView source={{ uri: 'https://map.google.com/' }} />
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



