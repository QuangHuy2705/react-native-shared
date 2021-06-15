// @ts-ignore
import React, {PureComponent, useState} from 'react';
// @ts-ignore
import Container from 'employee-portal-shared/src/components/layout/Container';
import {View, StyleSheet, ScrollView} from "react-native";
import ImageHeader from "../components/workplace/ImageHeader";
import CategoryIconButton from "../components/workplace/CategoryIconButton";
import SearchBlock from "../components/workplace/SearchBlock";
import LocationBlock from "../components/workplace/LocationBlock";
import Card from "../components/workplace/Card";
import {available_rooms, buttons_line1, buttons_line2, current_location} from "../mock/Data";
import PRDivider from "../components/workplace/PRDivider";
import {Metrics} from "../constants";


export default class WorkplaceScreen extends PureComponent {
	static navigationOptions = {
		title: 'Workplace',
	};
	genButtons = () => {
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
						onPress={() => item.onPress()}
						icon={item.icon}/>)
				}
			</View>
		})
	}

	render() {
		return (
			<Container
				flex={1}
				justifyContent='center'
				alignItems='center'

			>
				<ScrollView style={{flex: 1, width: '100%', backgroundColor: "#E5E5E5"}}>
					<ImageHeader/>
					<View style={{marginTop: -50, marginBottom:32}}>
						<Card style={{height: 100}}><LocationBlock location={current_location}/></Card>
						<Card style={{paddingBottom: 8}}>
							<SearchBlock/>
							{this.genButtons()}
						</Card>
						{/*<Card style={{height: 272}} title={"TO DAY EVENT"}/>*/}
						<Card title={"AVAILABLE ROOMS"} seemore>
							{available_rooms.map(r => <LocationBlock
								key={r.name}
								location={r} style={{paddingVertical: 10}}/>)}
							<PRDivider style={{width: Metrics.deviceWidth - 48}}/>
						</Card>
						<Card title={"FOOD & DRINK"} seemore>
							{available_rooms.map(r => <LocationBlock
								key={r.name}
								location={r} style={{paddingVertical: 10}}/>)}
							<PRDivider style={{width: Metrics.deviceWidth - 48}}/>
						</Card>
					</View>
				</ScrollView>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		paddingVertical: 8,
		justifyContent: 'space-between',
	},

});



