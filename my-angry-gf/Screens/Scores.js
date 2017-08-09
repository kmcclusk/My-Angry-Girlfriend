import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ActivityIndicator,
  ListView
} from 'react-native';

export default class Scores extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      isLoading: true
	    }
  }
  componentDidMount() {
    return fetch('https://radiant-river-84976.herokuapp.com/Scores')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      })
  }
	render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

   return (
      <View style={styles.scoreContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
          	<View style={{flexDirection: 'row'}}>
	          	<Text style={styles.playerText}>{rowData.playername}{this.props.username}</Text>
	          	<Text style={styles.scoreText}>{rowData.score}</Text>
          	</View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 	scoreContainer: {
 		flex: 1,
 		paddingTop: 20,
 		alignItems: 'center',
 	},
 	playerText: {
 		fontSize: 20,
 	},
 	scoreText: {
 		fontSize: 20,
 		paddingLeft: 60,
 	},
 	numDays: {
 		fontSize: 20,
 		paddingLeft: 5,
 	}
});