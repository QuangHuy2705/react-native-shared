import { v4 } from 'uuid';
import querystring from 'query-string';
import { Buffer } from 'buffer';

export default class AzureAuth {
  constructor(instance) {
    const config = instance.getConfig();

    this.authority = config.authority;
    this.authorizeEndpoint = config.authorizeEndpoint;
    this.tokenEndpoint = config.tokenEndpoint;
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    this.redirectUri = config.redirectUri;
    this.scope = config.scope;
    this.state = v4();
  }

  getAuthUrl = () => {
    return this.authority + this.authorizeEndpoint +
      '?client_id=' + this.clientId +
      '&response_type=code' +
      '&redirect_uri=' + this.redirectUri +
      '&scope=' + this.scope +
      '&response_mode=query' +
      '&nonce=' + v4() +
      '&state=' + this.state;
  }

  requestToken = async (params) => {
    const data = querystring.stringify(params);
    const endpoint = this.authority + this.tokenEndpoint;

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-length': 0
    };

    if (data) {
      headers['Content-Length'] = Buffer.isBuffer(data)
        ? data.length
        : Buffer.byteLength(data);
    }

    const payload = {
      method: 'POST',
      headers,
      body: data
    };
    try {
      const rs = await fetch(endpoint, payload);
      const { expires_in, access_token, refresh_token } = await rs.json();
      return { expiresIn: expires_in, accessToken: access_token, refreshToken: refresh_token };
    } catch (err) {
      throw new Error(err);
    };
  }

  getTokenFromCode = async (code) => {
    const params = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: this.redirectUri,
      response_mode: 'form_post',
      nonce: v4(),
      state: this.state
    }

    return this.requestToken(params);
  }

  getTokenFromRefreshToken = async (refreshToken) => {
    const params = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
      redirect_uri: this.redirectUri,
      response_mode: 'form_post',
      nonce: v4(),
      state: this.state
    }

    return this.requestToken(params);
  }
}
