
import Api from './api';

export default class Notification {
  static async getNotifications(userId, offset) {
    const uri = `/v1/social/notification/list?offset=${offset}&userId=${userId}&limit=100`;
    const { error, data } = await Api.fetch(uri, {
      method: 'GET'
    });
    if (error) {
      throw new Error(error.message);
    }

    const notifications = (data.notificationIds || []).map((id) => {
      const notification = data.notifications[id];
      if (!notification) {
        return null;
      }

      const from = data.users[notification.fromUserId];
      const owner = data.users[notification.ownerId];
      const isMine = notification.ownerId === userId;

      // Supported comment and like
      if (!from || !owner || [2, 3].indexOf(notification.templateId) < 0) {
        return null;
      }

      return {
        ...notification,
        id,
        from: { ...from, name: from.displayName, photo: from.avatar },
        owner: { ...owner, name: owner.displayName, photo: owner.avatar },
        isMine
      };
    }).filter(n => !!n);

    return { notifications };
  }
}
