import Api from './api';

const mockAttachment = {
	link: {
		title: "Setting up the development environment · React Native",
		description: "This page will help you install and build your first React Native app.",
		url: "https://reactnative.dev/docs/environment-setup",
		thumbnail: "https://reactnative.dev/img/tiny_logo.png"
	},
	image: [
		{
			thumbnail: "https://miro.medium.com/max/1000/1*s2xskzo-THrr8eg3gePG2w.png",
			big: "https://miro.medium.com/max/1000/1*s2xskzo-THrr8eg3gePG2w.png"
		},
		{
			thumbnail: "https://res.cloudinary.com/practicaldev/image/fetch/s--1_52psnZ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https:/dev-to-uploads.s3.amazonaws.com/i/t5esv4088d1gmnkvivjj.png",
			big: "https://res.cloudinary.com/practicaldev/image/fetch/s--1_52psnZ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/t5esv4088d1gmnkvivjj.png"
		},
		{
			thumbnail: "https://redux-saga.js.org/img/Redux-Saga-Logo.png",
			big: "https://redux-saga.js.org/img/Redux-Saga-Logo.png"
		},
		{
			thumbnail: "https://i.imgflip.com/2knj8b.jpg",
			big: "https://i.imgflip.com/2knj8b.jpg"
		},
		,
		{
			thumbnail: "https://i.imgflip.com/2knj8b.jpg",
			big: "https://i.imgflip.com/2knj8b.jpg"
		},
		,
		{
			thumbnail: "https://i.imgflip.com/2knj8b.jpg",
			big: "https://i.imgflip.com/2knj8b.jpg"
		}
	]
}


export default class Home {
	static async getFeedItems(offset) {
		const uri = `/v1/social/feed/list-user-home?offset=${offset}&limit=1`;
		const { error, data } = await Api.fetch(uri, {
			method: 'GET'
		});
		if (error) {
			throw new Error(error.message);
		}
		const feedItems = (data.feedIds || []).map((item) => ({
			feedId: item,
			fromUserId: data.feeds[item].fromUserId,
			fromUser: data.users[data.feeds[item].fromUserId],
			toUserId: data.feeds[item].toUserId,
			toUser: data.users[data.feeds[item].toUserId],
			toGroupId: data.feeds[item].privacyGroupId,
			toGroup: data.groups[data.feeds[item].privacyGroupId],
			message: data.feeds[item].message,
			attachment: data.feeds[item].attachment ? data.feeds[item].attachment : mockAttachment,
			likes_number: data.likes_number[item],
			comments_number: data.comments_number[item],
			createdTime: data.feeds[item].createdTime
		}));
		return feedItems;
	}
}