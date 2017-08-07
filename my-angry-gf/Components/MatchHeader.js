import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  Image
} from 'react-native';
import { Components } from 'expo';

export default class MatchHeader extends React.Component {

	render() {
		return (
			<View>
					<View style={styles.bar}>
						<Text style={styles.title}>Matches</Text>
					</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  bar: {
  	backgroundColor:'#FBCFDC',
    paddingTop:45,
    paddingBottom:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
  	fontSize: 30,
  	color: '#fff',
    backgroundColor:'rgba(0,0,0,0)',
  },
})