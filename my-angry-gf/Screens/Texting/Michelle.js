import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  AppRegistry,
} from 'react-native';

export default class MichelleScreen extends Component {
	static navigationOptions = {
		title: 'Michelle',
	};

	render() {
		return (
			<View style={styles.container}>
			</View>
		)
	}
}

const styles = StyleSheet.create({
 container: {
 	flex: 1,
 	backgroundColor: '#fff',
 }
});

AppRegistry.registerComponent('Michelle', ()=> MichelleScreen);