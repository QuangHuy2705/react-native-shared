
import Api from './api';

export default class User {
  static async getUserById(userId) {
    const uri = `/v1/users/profile/hr/get-by-id/${userId}`;
    const { error, data } = await Api.fetch(uri, {
      method: 'GET'
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}
