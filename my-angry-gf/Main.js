import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView,
  AppRegistry,
  TouchableHighlight,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Expo from 'expo';

import Home from './Screens/Home.js';
import Scores from './Screens/Scores.js';

import MatchHeader from './Components/MatchHeader.js';
import ScoreHeader from './Components/ScoreHeader.js';


// var Day1 = require('./Day1.js');

async function signInWithGoogleAsync() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: "730266040886-hkuqs3mjblk148grsk0autr5816af4l2.apps.googleusercontent.com",
      iosClientId: "730266040886-s6biuco47vuhkqfqdb60rj9q9h20u8g3.apps.googleusercontent.com",
      scopes: ['profile', 'email'],
    });
    console.log(result);
    if (result.type === 'success') {
      this.setState({ appIsReady: true, username: result.user.givenName });
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


export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.signInWithGoogleAsync = signInWithGoogleAsync.bind(this)
    this.state = {
      appIsReady: false,
      username: null
    }
  }

  static navigationOptions = {
    header: null,
    footer: null,
  }

  render() {
    console.log(this.state);
    // console.log(Day1);
    if (this.state.appIsReady) {
      const { navigate } = this.props.navigation;
      return(
        <Swiper 
        showsButtons={false}
        showsPagination={false}
        loop={false}
        index={1}>
        <View style={styles.slide1}>
          <MatchHeader />
          <ScrollView>
            <View>
              <View style = {styles.contactContainer}>
                <TouchableHighlight onPress={() => navigate('Daenerys', {username: this.state.username})}>
                  <View style = {styles.buttonWrapper}>
                    <Text style = {styles.buttonText}>
                      <Image source={require('./assets/icons/d.png')} style={{width: 60, height:60}}/>
                      <Text style={{textAlign: 'center'}}>   Daenerys</Text>
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View style = {styles.contactContainer}>
                <TouchableHighlight onPress={() => navigate('Sansa')}>
                  <View style = {styles.buttonWrapper}>
                    <Text style = {styles.buttonText}>
                      <Image source={require('./assets/icons/s.png')} style={{width: 60, height:60}}/>
                      <Text style={{textAlign: 'center'}}>   Sansa</Text>
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View style = {styles.contactContainer}>
                <TouchableHighlight onPress={() => navigate('Ygritte')}>
                  <View style = {styles.buttonWrapper}>
                    <Text style = {styles.buttonText}>
                      <Image source={require('./assets/icons/ygritte.png')} style={{width: 60, height:60}}/>
                      <Text style={{textAlign: 'center'}}>   Ygritte</Text>
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View style = {styles.contactContainer}>
                <TouchableHighlight onPress={() => navigate('Margaery')}>
                  <View style = {styles.buttonWrapper}>
                    <Text style = {styles.buttonText}>
                      <Image source={require('./assets/icons/m.png')} style={{width: 60, height:60}}/>
                      <Text style={{textAlign: 'center'}}>   Margaery</Text>
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.slide2}>
          <Home />
        </View>
        <View style={styles.slide3}>
          <ScoreHeader />
          <ScrollView>
            <Scores username={this.state.username}/>
          </ScrollView>
        </View>
      </Swiper>
      );
    } else {
      return(
        <View style={styles.container}>
          <Image Image source={require('./assets/icons/app-icon-login-01.png')} style={{ height: 150, width: 150, marginBottom: 20, resizeMode: 'contain'}}/>
          <View style={styles.googleButton}>
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
  googleButton: {
    padding: 15,
    backgroundColor: '#c9302c',
    borderWidth: 0.7,
    borderRadius: 3,
    borderColor: '#ac2925'
  },
  slide1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide3: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  contactContainer: {
    marginTop: 5,
    borderBottomWidth: 0.3,
    borderBottomColor: '#b2b2b2',
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

AppRegistry.registerComponent('Main', () => MainScreen);