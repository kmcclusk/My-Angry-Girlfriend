import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
} from 'react-native';
import Swiper from 'react-native-swiper';
import Expo from 'expo';

import Home from './Screens/Home.js';
import Matches from './Screens/Matches.js';
import Scores from './Screens/Scores.js';

var Day1 = require('./Day1.js');

async function signInWithGoogleAsync() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: "730266040886-hkuqs3mjblk148grsk0autr5816af4l2.apps.googleusercontent.com",
      iosClientId: "730266040886-s6biuco47vuhkqfqdb60rj9q9h20u8g3.apps.googleusercontent.com",
      scopes: ['profile', 'email'],
    });
    console.log(result);
    if (result.type === 'success') {
      this.setState({ appIsReady: true });
      return result.accessToken;
      
    } else {
      this.setState({ appIsReady: true })
      return {cancelled: true};
    }

  } catch(e) {
    console.log(e)
    return {error: true};
  } 
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.signInWithGoogleAsync = signInWithGoogleAsync.bind(this)

    this.state = {
      appIsReady: false
    }
  }

  render() {
    console.log(this.state);
    console.log(Day1);
    if (this.state.appIsReady) {
      return(
        <Swiper style={styles.wrapper} 
        showsButtons={false}
        showsPagination={true}
        loop={false}
        index={1}>
        <View style={styles.slide1}>
          <Matches />
        </View>
        <View style={styles.slide2}>
          <Home />
        </View>
        <View style={styles.slide3}>
          <Scores />
        </View>
      </Swiper>
      );
    } else {
      return(
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>{this.signInWithGoogleAsync()}}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
      );
   }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
   wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});