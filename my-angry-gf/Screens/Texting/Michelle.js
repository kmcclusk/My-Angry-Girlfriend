import React, { Component } from 'react';
import { 
  Text, 
  View,
  Stylesheet,
  AppRegistry,
} from 'react-native';

export default class MichelleScreen extends Component {
	static navigationOptions = {
		title: 'Michelle',
	};

	render() {
		return (
			<View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<Text>Michelle</Text>
			</View>
		)
	}
}

AppRegistry.registerComponent('Michelle', ()=> MichelleScreen);