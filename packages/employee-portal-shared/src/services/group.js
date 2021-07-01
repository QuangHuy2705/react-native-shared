
import Api from './api';

export default class Group {
  static async getGroupList() {
    const uri = `/v1/social/group/list-all-group`;
    const { error, data } = await Api.fetch(uri, {
      method: 'GET'
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}
