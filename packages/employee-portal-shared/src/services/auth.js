
import Api from './api';

export default class Auth {
  static async logIn(uname, password) {
    const uri = `/passport/login`;
    const { error, data } = await Api.fetch(uri, {
      authorized: false,
      method: 'POST',
      body: JSON.stringify({ uname, password })
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}
