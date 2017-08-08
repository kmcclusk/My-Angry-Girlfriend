import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight,
  Image,
  AppRegistry,
} from 'react-native';

// import { StackNavigator } from 'react-navigation';

// import DJScreen from './Texting/DJ.js';
// import KimmyScreen from './Texting/Kimmy.js';
// import StephanieScreen from './Texting/Stephanie.js';
// import MichelleScreen from './Texting/Michelle.js';

// const ModalStack = StackNavigator({
// 	DJ: { 
// 		screen: DJScreen,
// 	},
// 	Kimmy: { 
// 		screen: KimmyScreen, 
// 	},
// 	Stephanie: { 
// 		screen: StephanieScreen, 
// 	},
// 	Michelle: { 
// 		screen: MichelleScreen, 
// 	},
// });

export default class Matches extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			<View>
			<View style = {styles.contactContainer}>
	          <TouchableHighlight onPress={() => navigate('DJ')}>
	          	<View style = {styles.buttonWrapper}>
	          		<Text style = {styles.buttonText}>
	          			<Image source={require('../assets/icons/dj.png')} style={{width: 60, height:60}}/>
	          			<Text style={{textAlign: 'center'}}>DJ</Text>
	          		</Text>
	          	</View>
	          </TouchableHighlight>
	        </View>
	        <View style = {styles.contactContainer}>
	          <TouchableHighlight onPress={() => navigate('Kimmy')}>
	          	<View style = {styles.buttonWrapper}>
	          		<Text style = {styles.buttonText}>
	          			<Image source={require('../assets/icons/kimmy.png')} style={{width: 60, height:60}}/>
	          			<Text style={{textAlign: 'center'}}>Kimmy</Text>
	          		</Text>
	          	</View>
	          </TouchableHighlight>
	        </View>
	        <View style = {styles.contactContainer}>
	          <TouchableHighlight onPress={() => navigate('Stephanie')}>
	          	<View style = {styles.buttonWrapper}>
	          		<Text style = {styles.buttonText}>
		          		<Image source={require('../assets/icons/stephanie.png')} style={{width: 60, height:60}}/>
		          		<Text style={{textAlign: 'center'}}>Stephanie</Text>
	          		</Text>
	          	</View>
	          </TouchableHighlight>
	        </View>
	        <View style = {styles.contactContainer}>
	          <TouchableHighlight onPress={() => navigate('Michelle')}>
	          	<View style = {styles.buttonWrapper}>
	          		<Text style = {styles.buttonText}>
		          		<Image source={require('../assets/icons/michelle.png')} style={{width: 60, height:60}}/>
		          		<Text style={{textAlign: 'center'}}>Michelle</Text>
		          	</Text>
	          	</View>
	          </TouchableHighlight>
	        </View>
	        </View>
		)
	}
};

AppRegistry.registerComponent('Matches', ()=> Matches);

const styles = StyleSheet.create({
	contactContainer: {
		borderBottomWidth: 0.3,
		borderBottomColor: '#b2b2b2',
	},
	button: {
		backgroundColor: '#fff',
	},
	buttonWrapper: {
		marginTop: 5,
		marginLeft: 5,
		paddingTop: 5,
		paddingBottom: 5,
		flexDirection: 'column',
	},
	buttonText: {
		justifyContent: 'center',
		marginHorizontal: 20,
		elevation: 1,
		color: 'black',
		fontWeight: 'bold',
	}
});