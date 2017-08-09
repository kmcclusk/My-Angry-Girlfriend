import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './Main.js';

import DaenerysScreen from './Screens/TextScreens/Daenerys.js';
import SansaScreen from './Screens/TextScreens/Sansa.js';
import YgritteScreen from './Screens/TextScreens/Ygritte.js';
import MargaeryScreen from './Screens/TextScreens/Margaery.js';


const nativeShop = StackNavigator(
{
  Main: { screen: MainScreen, },
  Daenerys: { screen: DaenerysScreen, },
  Sansa: { screen: SansaScreen, },
  Ygritte: { screen: YgritteScreen, },
  Margaery: { screen: MargaeryScreen, },
},
{ 
  cardStyle: {
    backgroundColor: '#fff',
  }
}
);

export default nativeShop;