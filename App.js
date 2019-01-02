import React from 'react';
import Loading from './components/Loading';
import Home from './components/Home';
import {
      createStackNavigator,
      createAppContainer
    } from 'react-navigation';

const RootStack = createStackNavigator({
    Loading: {
      screen: Loading
    },
    Home: {
      screen: Home
    }
  });

const App = createAppContainer(RootStack);

export default App;


