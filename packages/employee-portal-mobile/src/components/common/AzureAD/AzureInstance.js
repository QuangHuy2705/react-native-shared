export default class AzureInstance {
  constructor(credentials) {
    const tenantId = credentials.tenantId || 'common';
    this.authority = `https://login.microsoftonline.com/${tenantId}`;
    this.authorizeEndpoint = '/oauth2/v2.0/authorize';
    this.redirectUri = credentials.redirectUri || 'http://localhost:8080/login_callback';
    this.tokenEndpoint = '/oauth2/v2.0/token';
    this.profileUri = 'https://graph.microsoft.com/v1.0/me';
    this.clientId = credentials.clientId;
    this.clientSecret = credentials.clientSecret;
    this.scope = credentials.scope;
    this.token = {};
  }

  getConfig() {
    return {
      authority: this.authority,
      authorizeEndpoint: this.authorizeEndpoint,
      tokenEndpoint: this.tokenEndpoint,
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      redirectUri: this.redirectUri,
      scope: this.scope,
    }
  }

  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  getUserInfo = async () => {
    if (this.token === undefined) {
      throw new Error("Access token is undefined, please authenticate using Auth first");
    }
    try {
      const rs = await fetch(this.profileUri, {
        headers: {
          'Authorization': "Bearer " + this.token.accessToken,
        }
      });
      return rs.json();
    } catch (err) {
      throw new Error(err);
    }
  }
}
