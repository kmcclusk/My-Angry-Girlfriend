import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight,
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
		          		<Text style = {styles.buttonText}>DJ</Text>
		          	</View>
		          </TouchableHighlight>
		        </View>
		        <View style = {styles.contactContainer}>
		          <TouchableHighlight>
		          	<View style = {styles.buttonWrapper}>
		          		<Text style = {styles.buttonText}>Kimmy</Text>
		          	</View>
		          </TouchableHighlight>
		        </View>
		        <View style = {styles.contactContainer}>
		          <TouchableHighlight>
		          	<View style = {styles.buttonWrapper}>
		          		<Text style = {styles.buttonText}>Stephanie</Text>
		          	</View>
		          </TouchableHighlight>
		        </View>
		        <View style = {styles.contactContainer}>
		          <TouchableHighlight>
		          	<View style = {styles.buttonWrapper}>
		          		<Text style = {styles.buttonText}>Michelle</Text>
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
		marginTop: 10,
		marginLeft: 60,
		paddingTop: 20,
		paddingBottom: 20,
		marginRight:20,
		flexDirection: 'column',
	},
	buttonText: {
		justifyContent: 'center',
		marginTop: 10,
		marginBottom: 10,
		marginHorizontal: 20,
		elevation: 1,
		color: 'black'
	}
});