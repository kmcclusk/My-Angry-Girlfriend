import React, { Component } from 'react';
import { 
  Text, 
  View,
  Stylesheet,
  AppRegistry,
} from 'react-native';

export default class KimmyScreen extends Component {
	static navigationOptions = {
		title: 'Kimmy',
	};

	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<Text>Kimmy</Text>
			</View>
		)
	}
}

AppRegistry.registerComponent('Kimmy', ()=> KimmyScreen);