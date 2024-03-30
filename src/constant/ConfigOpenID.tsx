const configOIDC = {
  issuer: 'https://dev-yg.us.auth0.com/',
  clientId: 'H9F6QG5SzTKMv0tbmgxLj9LjG1EKVllA',
  redirectUrl: 'https://ctsandbox.innohub.app/callback',
  discovery_endpoint:
    'https://dev-yg.us.auth0.com/.well-known/openid-configuration',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
  useNonce: false,
  response_type: 'code',
  audience: 'https://dev-yg.us.auth0.com/api/v2/',
};

export default configOIDC;
