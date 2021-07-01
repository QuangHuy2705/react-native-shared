import Api from './api';

export default class Event {
	static async getEvents(date) {
		const uri = `/v1/event/calendar/list?date=${date}`;
		const { error, data } = await Api.fetch(uri, {
			method: 'GET'
		});
		if (error) {
			throw new Error(error.message);
		}
		const events = (data.eventIds || []).map((id) => ({
			...data.events[id],
			attendees: (data.attendees || []).map(a => {
				const profile = data.profiles[a];
				return profile && {
					...profile,
					photo: profile.avatar,
				};
			}).filter(a => !a)
		}));
		return { events };
	}
}
