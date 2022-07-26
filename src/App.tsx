/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Router from './router/Router';
import {Provider} from 'react-redux';
import {persistor, Store} from './Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  SystemNavigationBar.stickyImmersive().then();
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
