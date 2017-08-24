import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './Main.js';

import DanniScreen from './Screens/TextScreens/Danni.js';
import SashaScreen from './Screens/TextScreens/Sasha.js';
import KellyScreen from './Screens/TextScreens/Kelly.js';
import MadisonScreen from './Screens/TextScreens/Madison.js';


const nativeShop = StackNavigator(
{
  Main: { screen: MainScreen, },
  Danni: { screen: DanniScreen, },
  Sasha: { screen: SashaScreen, },
  Kelly: { screen: KellyScreen, },
  Madison: { screen: MadisonScreen, },
},
{ 
  cardStyle: {
    backgroundColor: '#fff',
  }
}
);

export default nativeShop;