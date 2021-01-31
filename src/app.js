import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import React from 'react';
import {Provider} from 'react-redux';
import {Navigator} from './navigation';
import configureStore from './redux/store';

enableScreens();

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
