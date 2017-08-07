import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight,
  Navigator,
  Image,
} from 'react-native';

export default class Matches extends Component {
	constructor(props) {
    super(props);
    this.state = { pressed: false }
	}

	render() {
		return(
			<View>
			<View style = {styles.contactContainer}>
	          <TouchableHighlight
          		style={[ styles.button, this.state.pressed ? {backgroundColor: '#b2b2b2'} : {}]}
      			onHideUnderlay={()=>{this.setState({pressed: false})}}
      			onShowUnderlay={()=>{this.setState({pressed: true})}}>
	          	<View style = {styles.buttonWrapper}>
	          		<Text style = {styles.buttonText}>
	          			<Image source={require('../assets/icons/dj.png')} style={{width: 60, height:60}}/>
	          			<Text style={{textAlign: 'center'}}>DJ</Text>
	          		</Text>
	          	</View>
	          </TouchableHighlight>
	        </View>
	        <View style = {styles.contactContainer}>
	          <TouchableHighlight>
	          	<View style = {styles.buttonWrapper}>
	          		<Text style = {styles.buttonText}>
	          			<Image source={require('../assets/icons/kimmy.png')} style={{width: 60, height:60}}/>
	          			<Text style={{textAlign: 'center'}}>Kimmy</Text>
	          		</Text>
	          	</View>
	          </TouchableHighlight>
	        </View>
	        <View style = {styles.contactContainer}>
	          <TouchableHighlight>
	          	<View style = {styles.buttonWrapper}>
	          		<Text style = {styles.buttonText}>
		          		<Image source={require('../assets/icons/stephanie.png')} style={{width: 60, height:60}}/>
		          		<Text style={{textAlign: 'center'}}>Stephanie</Text>
	          		</Text>
	          	</View>
	          </TouchableHighlight>
	        </View>
	        <View style = {styles.contactContainer}>
	          <TouchableHighlight>
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