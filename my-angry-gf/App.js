import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './Main.js';

import DJScreen from './Screens/Texting/DJ.js';
import KimmyScreen from './Screens/Texting/Kimmy.js';
import StephanieScreen from './Screens/Texting/Stephanie.js';
import MichelleScreen from './Screens/Texting/Michelle.js';


const nativeShop = StackNavigator(
{
  Main: { screen: MainScreen, },
  DJ: { screen: DJScreen, },
  Kimmy: { screen: KimmyScreen, },
  Stephanie: { screen: StephanieScreen, },
  Michelle: { screen: MichelleScreen, },
},
{ 
  cardStyle: {
    backgroundColor: '#fff',
  }
}
);

export default nativeShop;