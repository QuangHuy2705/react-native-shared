import React from "react";
import { LocationData } from "packages/employee-portal-shared/src/types/LocationData";
import Icon from '~/ui/common/Icon';
import PRColors from "../constants/PRColors";

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
export const current_location: LocationData = {
	name: "Melbourne",
	path: "VNG Campus 1 - Floor 3",
	desc: "9 people",
}
export const buttons_line1 = [
	{
		title: "Desk",
		icon: <Icon name='search' color={PRColors.icon} size={30} />,
	},
	{
		title: "Meeting Room",
		icon: <Icon name='search' color={PRColors.icon} size={30} />,
	},
	{
		title: "Meeting Room ",
		icon: <Icon name='search' color={PRColors.icon} size={30} />,
	}
	,
	{
		title: "Coffee",
		icon: <Icon name='search' color={PRColors.icon} size={30} />,
	}
	,

];

export const buttons_line2 = [

	{
		title: "Coworker",
		icon: <Icon name='search' color={PRColors.icon} size={30} />,
	}
	,
	{
		title: "Pharmacy",
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
	}
];

