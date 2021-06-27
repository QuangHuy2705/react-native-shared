const regexUnsupportFormat = new RegExp(/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/);
const jsCoreDateCreator = (dateString) => { 
	// dateString *HAS* to be in this format "YYYY-MM-DD HH:MM:SS"
	if (regexUnsupportFormat.test(dateString)) {
		let dateParam = dateString.split(/[\s-:]/);
		dateParam[1] = (parseInt(dateParam[1], 10) - 1).toString();
		return new Date(...dateParam);
	}
	return dateString;
}

function convertTimeSince(rawDate) {
	let date = new Date(jsCoreDateCreator(rawDate));
	const seconds = Math.floor((new Date() - date) / 1000);
	let interval = seconds / 31536000;
	if (interval > 1) {
		return (
			Math.floor(interval) + (Math.floor(interval) === 1 ? " year" : " years")
		);
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return (
			Math.floor(interval) + (Math.floor(interval) === 1 ? " month" : " months")
		);
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return (
			Math.floor(interval) + (Math.floor(interval) === 1 ? " day" : " days")
		);
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return (
			Math.floor(interval) + (Math.floor(interval) === 1 ? " hour" : " hours")
		);
	}
	interval = seconds / 60;
	if (interval > 1) {
		return (
			Math.floor(interval) +
			(Math.floor(interval) === 1 ? " minute" : " minutes")
		);
	}
	if (seconds > 5) {
		return (
			Math.floor(seconds) + (Math.floor(interval) === 1 ? " second" : " seconds")
		);
	}
	return('Just now');
}

function getTotalDate(startDate, endDate) {
	const _startDate = new Date(jsCoreDateCreator(startDate));
	const _endDate = new Date(jsCoreDateCreator(endDate));
	const diffInTime = _endDate.getTime() - _startDate.getTime();
	const diffInDay = (diffInTime / (1000 * 3600 * 24)) + 1;
	return (diffInDay == 1 ? `${diffInDay} day` : `${diffInDay } days`)
}

export { convertTimeSince, getTotalDate }