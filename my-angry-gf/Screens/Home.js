import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Alert,
  Image,
} from 'react-native';

const showAlert = ()=> {
	Alert.alert(
  		'Swipe LEFT to play or RIGHT to view high scores',
	)
}

export default class Home extends Component {
	render() {
		return(
			<View style={{alignItems: 'center'}}>
            	<Image source={require('../assets/icons/landing-page-icon.png')} style={styles.landingPage}/>
            	<View style={styles.buttonWrapper}>
	            	<Text style = {styles.buttonText}>
	            		<Image source={require('../assets/icons/swipeleft.png')} style={{paddingTop: 35, width: 125, height: 125, resizeMode: 'contain'}}/>
	            		<Image source={require('../assets/icons/swiperight.png')} style={{paddingTop: 35, width: 125, height: 125, resizeMode: 'contain'}}/>
	            	</Text>
	            	<Text style = {styles.buttonText}>Swipe RIGHT to play</Text>
	            	<Text style = {styles.buttonText}>Swipe LEFT to view leader board</Text>
	            </View>
          	</View>
		)
	}
};

const styles = StyleSheet.create({
	landingPage: {
	    width: 250, 
	    height: 250, 
	    resizeMode: 'contain',
	    alignItems: 'center',
	  },
	swipeLeft: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
	buttonWrapper: {
	    marginTop: 5,
  },
   buttonText: {
   	textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 5,
    marginHorizontal: 20,
    elevation: 1,
    color: '#FFD5FF',
    fontWeight: 'bold',
    fontSize: 15,
  }
});