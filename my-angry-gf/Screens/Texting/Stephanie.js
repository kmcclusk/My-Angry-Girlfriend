import React, { Component } from 'react';
import { 
  Text, 
  View,
  Stylesheet,
  AppRegistry,
} from 'react-native';

export default class StephanieScreen extends Component {
	static navigationOptions = {
		title: 'Stephanie',
	};

	render() {
		
		return (
			<View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<Text>Stephanie</Text>
			</View>
		)
	}
}

AppRegistry.registerComponent('Stephanie', ()=> StephanieScreen);