import React, {PureComponent} from 'react';
import Container from 'employee-portal-shared/src/components/layout/Container';
import {View, StyleSheet, ScrollView} from "react-native";
import ImageHeader from "../components/workplace/ImageHeader";

export default class WorkplaceScreen extends PureComponent {
	static navigationOptions = {
		title: 'Workplace',
	};

	render() {
		return (
			<Container
				flex={1}
				justifyContent='center'
				alignItems='center'
			>
				<ScrollView style={{flex: 1, width: '100%'}}>
					<ImageHeader/>
					<View style={{marginTop: -50,}}>
						<View style={
							{
								...styles.card,
								...styles.boxShadow,
								height: 100,

							}}>
						</View>
						<View style={
							{
								...styles.card,
								...styles.boxShadow,
								height: 254,
							}}>
						</View>
						<View style={
							{
								...styles.card,
								...styles.boxShadow,
								height: 272,
							}}>
						</View>
						<View style={
							{
								...styles.card,
								...styles.boxShadow,
								height: 342,
							}}>
						</View>
						<View style={
							{
								...styles.card,
								...styles.boxShadow,
								height: 342,
							}}>
						</View>
					</View>
				</ScrollView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	card:{
		backgroundColor: "red",
		marginTop:16,
		marginHorizontal: 8,
		zIndex:10,
		borderRadius:5,
	},
	boxShadow:{
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
