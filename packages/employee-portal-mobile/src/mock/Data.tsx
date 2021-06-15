import React from "react";
import { LocationData } from "packages/employee-portal-shared/src/types/LocationData";
import Icon from 'employee-portal-shared/src/components/common/Icon';
import PRColors from "../constants/PRColors";
<<<<<<< HEAD
=======

export const food_drinks: LocationData[] = [{
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
>>>>>>> d88e2ad... add screen LocationDiscover

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
<<<<<<< HEAD
<<<<<<< HEAD
		icon: <Icon name='search' color={PRColors.icon} size={30} />,
	},
	{
		title: "Meeting Room",
		icon: <Icon name='search' color={PRColors.icon} size={30} />,
=======
		onPress: () => {
			console.log('click')
		},
=======
>>>>>>> c19aa45... update layout
		icon: <Icon name='search' color={PRColors.icon} size={30}/>,
	},
	{
		title: "Meeting Room",
		icon: <Icon name='search' color={PRColors.icon} size={30}/>,
>>>>>>> d88e2ad... add screen LocationDiscover
	}
	,
	{
		title: "Coffee",
<<<<<<< HEAD
<<<<<<< HEAD
		icon: <Icon name='search' color={PRColors.icon} size={30} />,
=======
		onPress: () => {
			console.log('click')
		},
=======
>>>>>>> c19aa45... update layout
		icon: <Icon name='search' color={PRColors.icon} size={30}/>,
>>>>>>> d88e2ad... add screen LocationDiscover
	}
	,
	{
		title: "Gyms",
<<<<<<< HEAD
<<<<<<< HEAD
		icon: <Icon name='search' color={PRColors.icon} size={30} />,
=======
		onPress: () => {
			console.log('click')
		},
=======
>>>>>>> c19aa45... update layout
		icon: <Icon name='search' color={PRColors.icon} size={30}/>,
>>>>>>> d88e2ad... add screen LocationDiscover
	}
	,

];

export const buttons_line2 = [

	{
		title: "Coworker",
<<<<<<< HEAD
<<<<<<< HEAD
		icon: <Icon name='search' color={PRColors.icon} size={30} />,
=======
		onPress: () => {
			console.log('click')
		},
=======
>>>>>>> c19aa45... update layout
		icon: <Icon name='search' color={PRColors.icon} size={30}/>,
>>>>>>> d88e2ad... add screen LocationDiscover
	}
	,
	{
		title: "Pharmacy",
<<<<<<< HEAD
<<<<<<< HEAD
		icon: <Icon name='search' color={PRColors.icon} size={30} />,
	},
	{
		title: "Library",
		icon: <Icon name='search' color={PRColors.icon} size={30} />,
	}
	,
	{
		title: "Toilet",
		icon: <Icon name='search' color={PRColors.icon} size={30} />,
=======
		onPress: () => {
			console.log('click')
		},
=======
>>>>>>> c19aa45... update layout
		icon: <Icon name='search' color={PRColors.icon} size={30}/>,
	},
	{
		title: "Library",
		icon: <Icon name='search' color={PRColors.icon} size={30}/>,
	}
	,
	{
		title: "Toilet",
		icon: <Icon name='search' color={PRColors.icon} size={30}/>,
>>>>>>> d88e2ad... add screen LocationDiscover
	}
];

