import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import DJText from '../Screens/Texting/DJ.js';
import StephanieText from '../Screens/Texting/Stephanie.js';
import KimmyText from '../Screens/Texting/Kimmy.js';
import MichelleText from '../Screens/Texting/Michelle.js';

export const MatchStack = StackNavigator({
	DJText: {
	    screen: DJText,
	    navigationOptions: {
	      title: 'DJText',
    	},
  	},
  	StephanieText: {
	    screen: StephanieText,
	    navigationOptions: {
	      title: 'StephanieText',
	    },
  	},
  	KimmyText: {
	    screen: KimmyText,
	    navigationOptions: {
	      title: 'KimmyText',
	    },
  	},
  	MichelleText: {
	    screen: MichelleText,
	    navigationOptions: {
	      title: 'MichelleText',
	    },
  	},
});
