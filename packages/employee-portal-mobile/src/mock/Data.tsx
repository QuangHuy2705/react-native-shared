import React from "react";
import {LocationData} from "packages/employee-portal-shared/src/types/LocationData";
import Icon from 'employee-portal-shared/src/components/common/Icon';

export const available_rooms: LocationData[] = [{
	name: "Melbourne",
	path: "VNG Campus 1 - Floor 3",
	desc: "9 people",
}, {
	name: "Rome",
	path: "VNG Campus 1 - Floor 2",
	desc: "12 people",
}, {
	name: "Beijing",
	path: "VNG Campus 1 - Floor 1",
	desc: "6 people",
}]
export const current_location: LocationData = {
	name: "Melbourne",
	path: "VNG Campus 1 - Floor 3",
	desc: "9 people",
}
export const buttons_line1 = [
	{
		title: "Desk",
		onPress: () => {
			console.log('click')
		},
		icon: <Icon name='search' color='#828282' size={30}/>,
	},
	{
		title: "Meeting Room",
		onPress: () => {
			console.log('click')
		},
		icon: <Icon name='search' color='#828282' size={30}/>,
	}
	,
	{
		title: "Coffee",
		onPress: () => {
			console.log('click')
		},
		icon: <Icon name='search' color='#828282' size={30}/>,
	}
	,
	{
		title: "Gyms",
		onPress: () => {
			console.log('click')
		},
		icon: <Icon name='search' color='#828282' size={30}/>,
	}
	,

];

export const buttons_line2 = [

	{
		title: "Coworker",
		onPress: () => {
			console.log('click')
		},
		icon: <Icon name='search' color='#828282' size={30}/>,
	}
	,
	{
		title: "Pharmacy",
		onPress: () => {
			console.log('click')
		},
		icon: <Icon name='search' color='#828282' size={30}/>,
	},
	{
		title: "Library",
		onPress: () => {
			console.log('click')
		},
		icon: <Icon name='search' color='#828282' size={30}/>,
	}
	,
	{
		title: "toilet",
		onPress: () => {
			console.log('click')
		},
		icon: <Icon name='search' color='#828282' size={30}/>,
	}
];

