import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import RouteStack from './src/navigatiion';
import {authorize} from 'react-native-app-auth';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

LogBox.ignoreAllLogs();

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const config = {
    issuer: 'https://dev-yg.us.auth0.com/',
    clientId: 'H9F6QG5SzTKMv0tbmgxLj9LjG1EKVllA',
    redirectUrl: 'https://dev-yg.us.auth0.com/.well-known/openid-configuration',
    scopes: ['openid', 'profile', 'email', 'offline_access'],
    useNonce: false,
    response_type: 'code',
    audience: 'https://dev-yg.us.auth0.com/api/v2/',
  };

  // const authConfig = {
  //   discovery_endpoint:
  //     'https://dev-yg.us.auth0.com/.well-known/openid-configuration',
  //   client_id: 'H9F6QG5SzTKMv0tbmgxLj9LjG1EKVllA',
  //   redirect_url: 'http://localhost:8082/callback',
  //   response_type: 'code',
  //   scope: 'openid profile email offline_access',
  //   audience: 'https://dev-yg.us.auth0.com/api/v2/',
  // };

  useEffect(() => {
    authConfig();
  });

  const authConfig = async () => {
    // await authorize(config);
  };

  return <RouteStack />;
};

export default AppWrapper;
