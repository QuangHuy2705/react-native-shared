import Api from './api';

export default class Post {
	static async getComments(feedId, offset) {
		const uri = `/v1/social/comment/list?feedId=${feedId}&offset=${offset}&limit=9`;
		const { error, data } = await Api.fetch(uri, {
			method: 'GET'
		});
		if (error) {
			return [];
		}
		const comments = data.commentIds.map((item) => ({
			commentId: item,
			fromUserId: data.comments[item].userId,
			fromUser: data.users[data.comments[item].userId],
			message: data.comments[item].message,
			attachment: data.comments[item].attachment,
			createdTime: data.comments[item].createdTime
		}));
		return comments;
	}

	static async postComment(comment) {
		const uri = '/v1/social/comment/post';
		const { error, data } = await Api.fetch(uri, {
			method: 'POST',
			body: JSON.stringify(comment)
		});
		if (error) {
			return {
				status: fasle
			};
		}
		return data;
	}
}