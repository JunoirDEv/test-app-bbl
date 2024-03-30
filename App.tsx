import React from 'react';
import {LogBox} from 'react-native';
import RouteStack from './src/navigatiion';
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
  return <RouteStack />;
};

export default AppWrapper;
