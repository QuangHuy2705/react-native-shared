// @ts-ignore
import React, {Component, PureComponent, useState} from 'react';
// @ts-ignore
import Container from 'employee-portal-shared/src/components/layout/Container';
import {
	View,
	StyleSheet,
	ScrollView,
} from "react-native";
import ImageHeader from "../components/workplace/ImageHeader";
import CategoryIconButton from "../components/workplace/CategoryIconButton";
import SearchBlock from "../components/workplace/SearchBlock";
import LocationBlock from "../components/workplace/LocationBlock";
import Card from "../components/workplace/Card";
import {available_rooms, buttons_line1, buttons_line2, current_location, food_drinks} from "../mock/Data";
import PRDivider from "../components/workplace/PRDivider";
import {Metrics} from "../constants";
import PRImages from "../constants/PRImages";
import {useNavigation} from "@react-navigation/native";
import EnvironmentBlock from "../components/workplace/EnvironmentBlock";

const WorkplaceScreen = () => {
	const navigation = useNavigation();
	const genButtons = () => {
		return [buttons_line1, buttons_line2].map((line, index) => {
			return <View
				key={index}
				style={{
					...styles.row
				}}
			>
				{line.map(item =>
					<CategoryIconButton
						key={item.title}
						title={item.title}
						onPress={() => navigation.navigate('Location', {category: item.title})}
						icon={item.icon}/>)
				}
			</View>
		})
	}
	const changeCategory = () => {
		console.log('changeCategory')
	}
	return (
		<Container
			flex={1}
			justifyContent='center'
			alignItems='center'

		>
			<ScrollView style={{flex: 1, width: '100%', backgroundColor: "#E5E5E5"}}>
				<ImageHeader/>
				<EnvironmentBlock style={{marginTop: -129}}/>
				<View style={{marginTop: -40, marginBottom: 32}}>
					<Card style={{height: 100}}>
						<LocationBlock variant={1}
							image={PRImages.locationMarker}
							location={current_location}
							onDirect={() => navigation.navigate('Location', {
								category: 'Desk',
								changeCategory: changeCategory
							})}
						/>
					</Card>
					<Card style={{paddingBottom: 8}}>
						<SearchBlock/>
						{genButtons()}
					</Card>
					{/*<Card style={{height: 272}} title={"TO DAY EVENT"}/>*/}
					<Card title={"AVAILABLE ROOMS"} seemore>
						{available_rooms.map(r =>
							<LocationBlock
								variant={1}
								key={r.name}
								location={r} style={{paddingVertical: 10}}
								onBook={() => navigation.navigate('Location')}
							/>)}
						<PRDivider style={{width: Metrics.deviceWidth - 48}}/>
					</Card>
					<Card title={"FOOD & DRINK"} seemore>
						{food_drinks.map(r =>
							<LocationBlock
								variant={1}
								key={r.name}
								location={r} style={{paddingVertical: 10}}
								onDirect={() => navigation.navigate('Location',
									{category: r.name})}
							/>)}
						<PRDivider style={{width: Metrics.deviceWidth - 48}}/>
					</Card>
				</View>
			</ScrollView>
		</Container>
	);
}
export default WorkplaceScreen
const styles = StyleSheet.create({
	environmentInfo: {

		height: 128,
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: 'space-between',
		paddingHorizontal: 24,
	},
	environmentInfoText: {
		color: 'white',
		fontWeight: '600',
	},
	row: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		paddingVertical: 8,
		justifyContent: 'space-between',
	},

});



