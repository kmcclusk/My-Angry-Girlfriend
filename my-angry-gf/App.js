import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Expo from 'expo';

import Home from './Screens/Home.js';
import Matches from './Screens/Matches.js';
import Scores from './Screens/Scores.js';

import MatchHeader from './Components/MatchHeader.js';

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
        <Swiper 
        showsButtons={false}
        showsPagination={true}
        loop={false}
        index={1}>
        <View style={styles.slide1}>
          <MatchHeader />
            <ScrollView>
              <Matches />
            </ScrollView>
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
          <View style={styles.button}>
            <TouchableOpacity onPress={()=>{this.signInWithGoogleAsync()}}>
              <Text style={styles.text}>Login with Google+</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
   }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: '#c9302c',
    borderWidth: 0.7,
    borderRadius: 3,
    borderColor: '#ac2925'
  },
  slide1: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});