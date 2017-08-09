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

export default class YgritteScreen extends Component {
	static navigationOptions = {
		title: 'Ygritte',
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
        messages: require('../../Texting/data/ygritteText.js'),
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
    const {navigate} = this.props.navigation;
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || messages[0].text || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'Ygritte is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {


          if (messages[0].text === "Pizza?") {
            this.onReceive("You know I'm on a diet! But fine.");
            this.endGame();
            setTimeout(() => {
              this.onReceive("What toppings do you want?");
              this.onReceive("Text a response back: \n 1. Pepperoni \n 2. Order what we got last time! \n 3. Pineapple sounds great \n 4. Whatever you want");
            }, 1000);
          } else if (messages[0].text === "I'm not really that hungry") {
            this.state.score = this.state.score - 10;
            this.onReceive('Well I am so...');
            this.endGame();
            setTimeout(() => {
              this.onReceive("What toppings do you want?");
              this.onReceive("Text a response back: \n 1. Pepperoni \n 2. Order what we got last time! \n 3. Pineapple sounds great \n 4. Whatever you want");
            }, 1000);
          } else if (messages[0].text === "Remember your diet! Be strong") {
            this.state.score = this.state.score - 25;
            this.onReceive('Are you calling me fat? We are so over!');
            this.endGame();
          } else if (messages[0].text === "What do you want to eat?") {
            this.state.score = this.state.score - 5;
            this.onReceive('You should already know I want pizza');
            this.endGame();
            setTimeout(() => {
              this.onReceive("What toppings do you want?");
              this.onReceive("Text a response back: \n 1. Pepperoni \n 2. Order what we got last time! \n 3. Pineapple sounds great \n 4. Whatever you want");
            }, 1000);


          } else if (messages[0].text === "Pepperoni") {
            this.state.score = this.state.score - 5;
            this.onReceive("Pepperoni is so greasy, we are getting veggie lovers");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You should leave now to pick it up. My favorite pizzeria is 45 minutes away :)");
              this.onReceive("Text a response back: \n 1. That's kind of far \n 2. Isn't Dominos closer? \n 3. Are you crazy? That's too far \n 4. If that's what you really want");
            }, 1000);
          } else if (messages[0].text === "Order what we got last time!") {
            this.onReceive("I guess that's okay");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You should leave now to pick it up. My favorite pizzeria is 45 minutes away :)");
              this.onReceive("Text a response back: \n 1. That's kind of far \n 2. Isn't Dominos closer? \n 3. Are you crazy? That's too far \n 4. If that's what you really want");
            }, 1000);
          } else if (messages[0].text === "Pineapple sounds great") {
            this.state.score = this.state.score - 25;
            this.onReceive("Ew. You are so disgusting. This is never going to work");
            this.endGame();
          } else if (messages[0].text === "Whatever you want") {
            this.state.score = this.state.score - 10;
            this.onReceive("Why do I always have to choose!? Fine!");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You should leave now to pick it up. My favorite pizzeria is 45 minutes away :)");
              this.onReceive("Text a response back: \n 1. That's kind of far \n 2. Isn't Dominos closer? \n 3. Are you crazy? That's too far \n 4. If that's what you really want");
            }, 1000);


          } else if (messages[0].text === "That's kind of far") {
            this.state.score = this.state.score - 5;
            this.onReceive("Trust me, it's worth the drive");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Oh, can you pay? The total is $53.47. Don't forget the tip!");
              this.onReceive("Text a response back: \n 1. Isn't that a little expensive? \n 2. Sure. \n 3. How about we go dutch? \n 4. Absolutely not! That is way too much");
            }, 1000);
          } else if (messages[0].text === "Isn't Dominos closer?") {
            this.state.score = this.state.score - 10;
            this.onReceive("You know I don't eat from chain restaurants! You'll thank me later");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Oh, can you pay? The total is $53.47. Don't forget the tip!");
              this.onReceive("Text a response back: \n 1. Isn't that a little expensive? \n 2. Sure. \n 3. How about we go dutch? \n 4. Absolutely not! That is way too much");
            }, 1000);
          } else if (messages[0].text === "Are you crazy? That's too far") {
            this.state.score = this.state.score - 25;
            this.onReceive("Am I not worth the drive? We're finished!");
            this.endGame();
          } else if (messages[0].text === "If that's what you really want") {
            this.onReceive("It's exactly what I want");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Oh, can you pay? The total is $53.47. Don't forget the tip!");
              this.onReceive("Text a response back: \n 1. Isn't that a little expensive? \n 2. Sure. \n 3. How about we go dutch? \n 4. Absolutely not! That is way too much");
            }, 1000);


          } else if (messages[0].text === "Isn't that a little expensive?") {
            this.state.score = this.state.score - 10;
            this.onReceive("I'm just going to cancel the order");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You whine too much, don't ever text me again");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);
          } else if (messages[0].text === "Absolutely not! That is way too much") {
            this.state.score = this.state.score - 25;
            this.onReceive("I'm just going to cancel the order");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You whine too much, don't ever text me again");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);
          } else if (messages[0].text === "Sure.") {
            this.onReceive("You're the best!");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Thanks for the pizza, but this just isn't working out ):");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);
          } else if (messages[0].text === "How about we go dutch?") {
            this.state.score = this.state.score - 5;
            this.onReceive("I'm just going to cancel the order");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You whine too much, don't ever text me again");
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
              this.onReceive('You know nothing');
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
            name: 'Ygritte',
            avatar: 'https://drive.google.com/uc?id=0B2RuATwqhKZ-UGhyQUFKLXJILWc',
          },
        }),
      };
    });
  }

  endGame() {
    const {navigate} = this.props.navigation;
    if (this.state.score <= 0) {
      setTimeout(() => {
        this.onReceive("You're just too difficult. We're finsihed!");
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

AppRegistry.registerComponent('Ygritte', ()=> YgritteScreen);