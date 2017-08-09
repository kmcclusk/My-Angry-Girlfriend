import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  AppRegistry,
  Platform,
} from 'react-native';

import {GiftedChat, Actions, Bubble} from 'react-native-gifted-chat';
import CustomActions from '../../Texting/CustomActions';
import CustomView from '../../Texting/CustomView';

export default class DaenerysScreen extends Component {

	static navigationOptions = {
		title: 'Daenerys',
	};
	constructor(props) {
    super(props);

    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
      score: 25,
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderFooter = this.renderFooter.bind(this);

    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require('../../Texting/data/daenerysText.js'),
      };
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    // for demo purpose
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    const { navigate } = this.props.navigation;
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || messages[0].text || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'Daenerys is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {


          if (messages[0].text === "No, not at all") {
            this.onReceive("You have to say that cause we're dating");
            this.endGame();
            setTimeout(() => {
              this.onReceive("I think we should start exercising together");
              this.onReceive("Text a response back: \n 1. I think that's a great idea \n 2. Sure! \n 3. I think I'm fine \n 4. I don't have the time");
            }, 1000);
          } else if (messages[0].text === "It never matters what I think") {
            this.state.score = this.state.score - 10;
            this.onReceive("Why can't you ever be helpful just once");
            this.endGame();
            setTimeout(() => {
              this.onReceive("I think we should start exercising together");
              this.onReceive("Text a response back: \n 1. I think that's a great idea \n 2. Sure! \n 3. I think I'm fine \n 4. I don't have the time");
            }, 1000);
          } else if (messages[0].text === "If you feel fat, try exercising") {
            this.state.score = this.state.score - 25;
            this.onReceive("Are you serious? You think I'm fat!!!!!");
            this.endGame();
          } else if (messages[0].text === "I think you always look great") {
            this.state.score = this.state.score - 5;
            this.onReceive(" I know that. I don't need you to tell me that.");
            this.endGame();
            setTimeout(() => {
              this.onReceive("I think we should start exercising together");
              this.onReceive("Text a response back: \n 1. I think that's a great idea \n 2. Sure! \n 3. I think I'm fine \n 4. I don't have the time");
            }, 1000);


          } else if (messages[0].text === "I think that's a great idea") {
            this.state.score = this.state.score - 5;
            this.onReceive("You seem a little too eager. I don't like that");
            this.endGame();
            setTimeout(() => {
              this.onReceive("What kind of class show we take? I'm thinking hot yoga");
              this.onReceive("Text a response back: \n 1. I guess that sounds okay \n 2. What about kick-boxing? \n 3. I hate yoga \n 4. I'm down for some yoga");
            }, 1000);
          } else if (messages[0].text === "Sure!") {
            this.onReceive("Wow, so you really think I need to lose weight. Whatever");
            this.endGame();
            setTimeout(() => {
              this.onReceive("What kind of class show we take? I'm thinking hot yoga");
              this.onReceive("Text a response back: \n 1. I guess that sounds okay \n 2. What about kick-boxing? \n 3. I hate yoga \n 4. I'm down for some yoga");
            }, 1000);
          } else if (messages[0].text === "I think I'm fine") {
            this.state.score = this.state.score - 25;
            this.onReceive("Fine? You are far from fine. I'm fine with us being over");
            this.endGame();
          } else if (messages[0].text === "I don't have the time") {
            this.state.score = this.state.score - 10;
            this.onReceive("Well make the time. We're doing this together");
            this.endGame();
            setTimeout(() => {
              this.onReceive("What kind of class show we take? I'm thinking hot yoga");
              this.onReceive("Text a response back: \n 1. I guess that sounds okay \n 2. What about kick-boxing? \n 3. I hate yoga \n 4. I'm down for some yoga");
            }, 1000);


          } else if (messages[0].text === "I guess that sounds okay") {
            this.state.score = this.state.score - 5;
            this.onReceive("Trust me, you need it");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Also let's get matching workout outfits. It'll be cute!");
              this.onReceive("Text a response back: \n 1. I already have workout clothes \n 2. Anything for you \n 3. I think that's cheesy \n 4. LOL");
            }, 1000);
          } else if (messages[0].text === "What about kick-boxing?") {
            this.state.score = this.state.score - 10;
            this.onReceive("As if! We're doing yoga!");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Also let's get matching workout outfits. It'll be cute!");
              this.onReceive("Text a response back: \n 1. I already have workout clothes \n 2. Anything for you \n 3. I think that's cheesy \n 4. LOL");
            }, 1000);
          } else if (messages[0].text === "I hate yoga") {
            this.state.score = this.state.score - 25;
            this.onReceive("Well I hate your attitude, and I don't need it anymore");
            this.endGame();
          } else if (messages[0].text === "I'm down for some yoga") {
            this.onReceive("Good, cause it's what we're doing");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Also let's get matching workout outfits. It'll be cute!");
              this.onReceive("Text a response back: \n 1. I already have workout clothes \n 2. Anything for you \n 3. I think that's cheesy \n 4. LOL");
            }, 1000);


          } else if (messages[0].text === "I already have workout clothes") {
            this.state.score = this.state.score - 10;
            this.onReceive("Well we're getting you new ones cause I want to match");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Acutally I don't know if I want to commit to spending that much time with you");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);
          } else if (messages[0].text === "LOL") {
            this.state.score = this.state.score - 25;
            this.onReceive("Really? We're done lol");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Acutally I don't know if I want to commit to spending that much time with you");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);
          } else if (messages[0].text === "Anything for you") {
            this.onReceive("Okay, be prepared to wear pink!");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Nevermind I'm perfect the way I am. Minus you");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);
          } else if (messages[0].text === "I think that's cheesy") {
            this.state.score = this.state.score - 5;
            this.onReceive("And I think you can get over it");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Nevermind I'm perfect the way I am. Minus you");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);


          } else if (messages[0].text === "Score") {
            this.onReceive("You're current score is " + this.state.score + " out of 25");
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Can you even type?');
            }
          }
        }
      }
      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Daenerys',
            avatar: 'https://drive.google.com/uc?id=0B2RuATwqhKZ-NFNjYnZRa2ZNbGc',
          },
        }),
      };
    });
  }

  endGame() {
    const {navigate} = this.props.navigation;
    if (this.state.score <= 0) {
      setTimeout(() => {
        this.onReceive("I need more space. You're just too clingy. We're breaking up");
        this.onReceive("Score: " + this.state.score + " out of 25");
      }, 1000);
      setTimeout(() => {
          navigate("Main");
      }, 6000);
    }
  }

  renderCustomActions(props) {
    if (Platform.OS === 'ios') {
      return (
        <CustomActions
          {...props}
        />
      );
    }
    const options = {
      'Action 1': (props) => {
        alert('option 1');
      },
      'Action 2': (props) => {
        alert('option 2');
      },
      'Cancel': () => {},
    };
    return (
      <Actions
        {...props}
        options={options}
      />
    );
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0',
          },
          right: {
            backgroundColor: '#FFD5FF',
          }
        }}
      />
    );
  }

  renderCustomView(props) {
    return (
      <CustomView
        {...props}
      />
    );
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        navigate={this.props.navigation}
        user={{
          _id: 1, // sent messages should have same user._id
        }}

        renderActions={this.renderCustomActions}
        renderBubble={this.renderBubble}
        renderCustomView={this.renderCustomView}
        renderFooter={this.renderFooter}
      />
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});

AppRegistry.registerComponent('Daenerys', ()=> DaenerysScreen);