// @ts-ignore
import React, {PureComponent, useState} from 'react';
// @ts-ignore
import Container from 'employee-portal-shared/src/components/layout/Container';
import {View, StyleSheet, Text, TouchableOpacity, FlatList, SafeAreaView, ImageBackground} from "react-native";
import SearchBlock from "../components/workplace/SearchBlock";
import PRColors from "../constants/PRColors";
import { WebView } from 'react-native-webview';
import PRImages from "../constants/PRImages";


const category = ['123', '32432']
export default class LocationDiscoverScreen extends PureComponent {
	static navigationOptions = {
		title: 'Location',
	};

	render() {
		return (
			<Container
				flex={1}
				justifyContent='center'
				alignItems='center'

			>
				<SafeAreaView style={{flex: 1, width: '100%', backgroundColor: 'white'}}>
					{/*<SearchBlock/>*/}
					<View style={{padding: 16}}>
						<FlatList
							horizontal
							data={category}
							keyExtractor={item => item}
							renderItem={({item}) => {
								return <TouchableOpacity
									style={[styles.category, item === '123' ? styles.selectCategory : {}]}
									onPress={() => console.log('slect')}
								>
									<Text
										style={[{fontSize: 13}, item === '123' ? {color: 'white'} : {color: "#A7A7A7"}]}>
										{item}
									</Text>
								</TouchableOpacity>
							}}/>
					</View>
					<View style={styles.map}>
						<ImageBackground
							style={{
								height: '100%',
								justifyContent: "center"
							}}
							resizeMode='cover'
							source={PRImages.roomExample}/>
						{/*<Leaflet/>*/}
						{/*<WebView source={{ uri: 'https://map.google.com/' }} />*/}
					</View>
				</SafeAreaView>
			</Container>
		);
	}
}
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



