// @ts-ignore
import React, { Component, PureComponent, useState } from 'react';
// @ts-ignore
import Container from '~/ui/layout/Container';
import Axios from "axios";
import {
	View,
	StyleSheet,
	ScrollView,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import EnvironmentBlock from '~/components/Workplace/EnvironmentBlock';
import ImageHeader from '~/components/Workplace/ImageHeader';
import LocationBlock from '~/components/Workplace/LocationBlock';
import SearchBlock from '~/components/Workplace/SearchBlock';
import PRImages from '~/constants/PRImages';
import PRMetrics from '~/constants/PRMetrics';
import Card from '~/components/Workplace/Card';
import PRDivider from '~/components/Workplace/PRDivider';
import CategoryIconButton from '~/components/Workplace/CategoryIconButton';
import { buttons_line1, buttons_line2, current_location, available_rooms, food_drinks } from '~/mock/Data';
import Header from '~/components/Workplace/Header';
import EventGroup from '~/components/Home/Event/EventGroup';
import { useEffect } from 'react';

const members: Profile[] = [
	{ id: 1, photo: 'https://i.pravatar.cc/50' },
	{ id: 2, photo: 'https://i.pravatar.cc/50' },
	{ id: 3, photo: 'https://i.pravatar.cc/50' },
	{ id: 4, photo: 'https://i.pravatar.cc/50' },
	{ id: 5, photo: 'https://i.pravatar.cc/50' },
];

const events_def: Event[] = [
	{
		id: "1",
		title: 'Meeting with TS team',
		members: members,
		time: '09:00 - 10:00',
		location: 'Beijing Room - V1 - F1 - Green Zone'
	}, {
		id: "2",
		title: 'Review Design',
		time: '13:00 - 14:00',
		members: members,
		location: 'Beijing Room - V1 - F1 - Green Zone'
	}
];

const Settings = {
	can_direct: false,
	can_book: false,
	can_search: false,
}
type Profile = {
	id: number,
	lineManagerDomain?: string,
	userId?: string,
	displayName?: string,
	domain?: string,
	avatar?: string,
	photo?: string
}
type Event = {
	id?: string
	title?: string,// TODO: replace by subject
	subject?: string,
	time?: string, // TODO:
	attendees?: string[],
	location?: Object,
	members?: Profile[]
}
type EventResp = {
	eventIds: string[],
	events: Record<string, Event>,
	profiles: Record<string, Profile>,

}
// FIXME: get from redux
export const fetchListData = (cb?) => {
	return Axios({
		url: `https://my-dev.vng.com.vn/v1/event/calendar/list?date=2021-06-07`,
		method: "GET",
		baseURL: "",
		headers: {
			Authorization: "Bearer " + "083bc4514ddd72aaec1bb6ff6c7f0549c3d32ebed9987b1bacc9d40e8f9105b7"
		},
		transformResponse: [function (data) {
			return data;
		}]
	}).then((resp) => {
		let items = JSON.parse(resp.data);
		cb && cb(items.data);
		return resp.data;
	}).catch((err) => {
		console.log(err);
	});
};
const WorkplaceScreen = () => {
	const [events, setEvents] = useState([])
	const navigation = useNavigation();
	useEffect(() => {
		console.log("useEffect");
		fetchListData((items: EventResp) => {
			let events = items.eventIds.map((eventId) => {
				let e = items.events[eventId]
				e.title = e.subject
				e.members = e.attendees
					.filter(domain => items.profiles[domain])
					.map(domain => {
						let p = items.profiles[domain];
						if (p != undefined) {
							p.photo = p ? p.avatar : "";
						}
						return p
					});
				return e;
			});
			setEvents(events);
		})
		return () => {
		}
	}, [])
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
						onPress={() => navigation.navigate('Location', { category: item.title })}
						icon={item.icon} />)
				}
			</View>
		})
	}
	const SearchSegment = () => {
		return Settings.can_search && <Card style={{ paddingBottom: 8 }}>
			<SearchBlock />
			{genButtons()}
		</Card>
	}
	return (
		<Container
			flex={1}
		>
			<Header title="Workplace" />
			<ScrollView style={{ flex: 1, width: '100%', backgroundColor: "#E5E5E5" }}>
				<ImageHeader />
				<EnvironmentBlock style={{ marginTop: -129 }} />
				<View style={{ marginTop: -40, marginBottom: 32 }}>
					<Card style={{ height: 100 }}>
						<LocationBlock variant={1}
							image={PRImages.locationMarker}
							location={current_location}
							onDirect={() => navigation.navigate('Location', {
								category: 'Desk',
							})}
						/>
					</Card>
					<SearchSegment />
					<Card >
						{events.length > 0 && <EventGroup name={"TODAY EVENT"} events={events} />}
					</Card>
					<Card title={"AVAILABLE ROOMS"} seeMore>
						{available_rooms.map(r =>
							<LocationBlock
								variant={1}
								image={{ uri: "https://picsum.photos/100" }}
								key={r.name}
								location={r}
								style={{ paddingVertical: 8 }}
								onBook={() => navigation.navigate('Location', {
									category: 'Meeting Room',
								})}
							/>)}
						<PRDivider style={{ width: PRMetrics.deviceWidth - 48 }} />
					</Card>
					<Card title={"FOOD & DRINK"} seeMore>
						{food_drinks.map(r =>
							<LocationBlock
								variant={1}
								image={{ uri: "https://picsum.photos/100" }}
								key={r.name}
								location={r}
								style={{ paddingVertical: 8 }}
							// onDirect={() => navigation.navigate('Location', {
							// 	category: 'Coffee',
							// })}
							/>)}
						<PRDivider style={{ width: PRMetrics.deviceWidth - 48 }} />
					</Card>
				</View>
			</ScrollView>
		</Container >
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



