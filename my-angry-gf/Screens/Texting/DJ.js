import React, { Component } from 'react';
import { 
  Text, 
  View,
  Stylesheet,
  AppRegistry,
} from 'react-native';

export default class DJScreen extends Component {
	static navigationOptions = {
		title: 'DJ',
	};

	render() {
		return (
			<View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<Text>DJ</Text>
			</View>
		)
	}
}

AppRegistry.registerComponent('DJ', ()=> DJScreen);