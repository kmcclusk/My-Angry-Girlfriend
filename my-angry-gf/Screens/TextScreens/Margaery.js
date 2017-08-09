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

export default class MargaeryScreen extends Component {

	static navigationOptions = {
		title: 'Margaery',
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
        messages: require('../../Texting/data/margaeryText.js'),
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
            typingText: 'Margaery is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {


          if (messages[0].text === "On my way to your house") {
            this.onReceive("Good. You should be");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Make sure you look decent. I hate it when you come over looking like a slob");
              this.onReceive("Text a response back: \n 1. Whatever you say \n 2. I'm wearing what you picked out \n 3. I'm wearing my birthday suit \n 4. I think I look fine");
            }, 1000);
          } else if (messages[0].text === "None of your business") {
            this.state.score = this.state.score - 10;
            this.onReceive('Everything is my business! Now hurry and get here');
            this.endGame();
            setTimeout(() => {
              this.onReceive("Make sure you look decent. I hate it when you come over looking like a slob");
              this.onReceive("Text a response back: \n 1. Whatever you say \n 2. I'm wearing what you picked out \n 3. I'm wearing my birthday suit \n 4. I think I look fine");
            }, 1000);
          } else if (messages[0].text === "On a date") {
            this.state.score = this.state.score - 25;
            this.onReceive("Excuse me? I should be are the center of your universe. Get lost!");
            this.endGame();
          } else if (messages[0].text === "At home") {
            this.state.score = this.state.score - 5;
            this.onReceive('Why? You should be here already.');
            this.endGame();
            setTimeout(() => {
              this.onReceive("Make sure you look decent. I hate it when you come over looking like a slob");
              this.onReceive("Text a response back: \n 1. Whatever you say \n 2. I'm wearing what you picked out \n 3. I'm wearing my birthday suit \n 4. I think I look fine");
            }, 1000);


          } else if (messages[0].text === "Whatever you say") {
            this.state.score = this.state.score - 5;
            this.onReceive("You're right, it is whatever I say. So make sure you change!");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Also, pick up some flowers and make them expensive!");
              this.onReceive("Text a response back: \n 1. Why? \n 2. I'm allergic to flowers \n 3. That just seems unnecessary \n 4. Already bringing some daisies");
            }, 1000);
          } else if (messages[0].text === "I'm wearing what you picked out") {
            this.onReceive("Great, though I'm still certain you're going to manage to make it look bad");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Also, pick up some flowers and make them expensive!");
              this.onReceive("Text a response back: \n 1. Why? \n 2. I'm allergic to flowers \n 3. That just seems unnecessary \n 4. Already bringing some daisies");
            }, 1000);
          } else if (messages[0].text === "I'm wearing my birthday suit") {
            this.state.score = this.state.score - 25;
            this.onReceive("You are such a perve. I need to be with someone who is going to take me seriously");
            this.endGame();
          } else if (messages[0].text === "I think I look fine") {
            this.state.score = this.state.score - 10;
            this.onReceive("You don't think, you do as I tell you and fine isn't good enough");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Also, pick up some flowers and make them expensive!");
              this.onReceive("Text a response back: \n 1. Why? \n 2. I'm allergic to flowers \n 3. That just seems unnecessary \n 4. Already bringing some daisies");
            }, 1000);


          } else if (messages[0].text === "Why?") {
            this.state.score = this.state.score - 5;
            this.onReceive("Don't worry about why, just do it");
            this.endGame();
            setTimeout(() => {
              this.onReceive("I was going to let this be a surprise, but my parents are here and I want you to meet them");
              this.onReceive("Text a response back: \n 1. What? \n 2. I think it's way too soon for that \n 3. I can't wait! \n 4. I don't know about this");
            }, 1000);
          } else if (messages[0].text === "I'm allergic to flowers") {
            this.state.score = this.state.score - 10;
            this.onReceive("You can suck it up, I want flowers");
            this.endGame();
            setTimeout(() => {
              this.onReceive("I was going to let this be a surprise, but my parents are here and I want you to meet them");
              this.onReceive("Text a response back: \n 1. What? \n 2. I think it's way too soon for that \n 3. I can't wait! \n 4. I don't know about this");
            }, 1000);
          } else if (messages[0].text === "That just seems unnecessary") {
            this.state.score = this.state.score - 25;
            this.onReceive("You're unnecessary, I can't deal with you anymore. We're done");
            this.endGame();
          } else if (messages[0].text === "Already bringing some daisies") {
            this.onReceive("Daisies are so tacky, but whatever");
            this.endGame();
            setTimeout(() => {
              this.onReceive("I was going to let this be a surprise, but my parents are here and I want you to meet them");
              this.onReceive("Text a response back: \n 1. What? \n 2. I think it's way too soon for that \n 3. I can't wait! \n 4. I don't know about this");
            }, 1000);


          } else if (messages[0].text === "What?") {
            this.state.score = this.state.score - 10;
            this.onReceive("Don't what me! You can be so annoying sometimes");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You just seem so empty-headed sometimes. We're not going to work");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);
          } else if (messages[0].text === "I think it's way too soon for that") {
            this.state.score = this.state.score - 25;
            this.onReceive("You are such a cry baby!");
            this.endGame();
            setTimeout(() => {
              this.onReceive("I don't your nagging in my life. I'm leaving you");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);
          } else if (messages[0].text === "I can't wait!") {
            this.onReceive("I just hope you impress them");
            this.endGame();
            setTimeout(() => {
              this.onReceive("My actaully don't like you and I agree. I deserve better. We're done!");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);
          } else if (messages[0].text === "I don't know about this") {
            this.state.score = this.state.score - 5;
            this.onReceive("Since when do you know anything, just get here");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You're not worth my timne. Don't bother coming. We're through.");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);


          } else if (messages[0].text === "Score") {
            this.onReceive("You're current score is " + this.state.score + " out of 25");
          }else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Umm... wow. Okay...');
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
            name: 'Margaery',
            avatar: 'https://drive.google.com/uc?id=0B2RuATwqhKZ-c3FJUmNzMVpkcTg',
          },
        }),
      };
    });
  }

  endGame() {
    const {navigate} = this.props.navigation;
    if (this.state.score <= 0) {
      setTimeout(() => {
        this.onReceive("I need someone who is going to compeltely devote themselves to me and you're not it.");
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

AppRegistry.registerComponent('Margaery', ()=> MargaeryScreen);