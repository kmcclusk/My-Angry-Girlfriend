import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  Image
} from 'react-native';
import { 
  Components,
  Font,
} from 'expo';

export default class ScoreHeader extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount(){
    await Font.loadAsync({
      'Times_New_Romance': require('../assets/fonts/Times_New_Romance.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View>
          <View style={styles.bar}>
            {
              this.state.fontLoaded ? (
                <Text style={styles.title}>
                  Leader Board
                </Text>
              ) : null
            }
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
    fontFamily: 'Times_New_Romance',
    fontSize: 45,
    color: '#fff',
    backgroundColor:'rgba(0,0,0,0)',
  },
});