import Storage from './storage';

const API_URL = 'https://my-dev.vng.com.vn/v1';
const TOKEN_KEY = '@authToken';

export default class Api {
  static async saveToken(tokenId) {
    return Storage.setItem(TOKEN_KEY, tokenId);
  }
  static async getToken() {
    return Storage.getItem(TOKEN_KEY);
  }
  static async fetch(uri, { authorized = true, headers = {}, ...options } = {}) {
    const url = `${API_URL}${uri}`;
    const token = authorized ? await Api.getToken() : undefined;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token && `Bearer ${token}`,
        ...headers,
      },
      ...options,

    });
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  }
}
