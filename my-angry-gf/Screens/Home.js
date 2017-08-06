import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Alert,
} from 'react-native';

const showAlert = ()=> {
	Alert.alert(
  		'Swipe LEFT to play or RIGHT to view high scores',
	)
}

export default class Home extends Component {
	render() {
		return(
			<View>
	          <Text>landing page</Text>
	        </View>
		)
	}
};