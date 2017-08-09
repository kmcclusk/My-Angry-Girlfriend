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

export default class KimmyScreen extends Component {
	static navigationOptions = {
		title: 'Kimmy',
	};
	constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);

    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require('../../Texting/data/kimmyText.js'),
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onLoadEarlier() {
    this.setState((previousState) => {
      return {
        isLoadingEarlier: true,
      };
    });

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.prepend(previousState.messages, require('../../Texting/data/old_messages.js')),
            loadEarlier: false,
            isLoadingEarlier: false,
          };
        });
      }
    }, 1000); // simulating network
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
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || messages[0].text || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'Kimmy is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].text === "Pizza?") {
            this.onReceive("You know I'm on a diet!");
            setTimeout(() => {
              this.onReceive("What toppings do you want?");
              this.onReceive("Text a response back: \n 1. Pepperoni duh! \n 2. You chose, I'm not picky \n 3. Pineapple sounds great \n 4. Whatever you want")
            }, 1000);
          } else if (messages[0].text === "I'm not really that hungry") {
            this.onReceive('Well I am so...');
            setTimeout(() => {
              this.onReceive("What toppings do you want?");
              this.onReceive("Text a response back: \n 1. Pepperoni duh! \n 2. You chose, I'm not picky \n 3. Pineapple sounds great \n 4. Whatever you want")
            }, 1000);
          } else if (messages[0].text === "Remember your diet! Be strong") {
            this.onReceive('Are you calling me fat? I am getting a pizza!');
            setTimeout(() => {
              this.onReceive("What toppings do you want?");
              this.onReceive("Text a response back: \n 1. Pepperoni duh! \n 2. You chose, I'm not picky \n 3. Pineapple sounds great \n 4. Whatever you want")
            }, 1000);
          } else if (messages[0].text === "What do you want to eat?") {
            this.onReceive('You should already know I want pizza');
            setTimeout(() => {
              this.onReceive("What toppings do you want?");
              this.onReceive("Text a response back: \n 1. Pepperoni duh! \n 2. You chose, I'm not picky \n 3. Pineapple sounds great \n 4. Whatever you want")
            }, 1000);
          } else if (messages[0].text === "Pepperoni duh!") {
            this.onReceive('I hate pepperoni, we are getting pinapple');
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Alright');
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
            name: 'Kimmy',
            avatar: 'https://drive.google.com/uc?id=0B2RuATwqhKZ-YmxuTXlYWmhDYkU',
          },
        }),
      };
    });
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
            backgroundColor: '#FBCFDC',
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
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        loadEarlier={this.state.loadEarlier}
        onLoadEarlier={this.onLoadEarlier}
        isLoadingEarlier={this.state.isLoadingEarlier}

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
})

AppRegistry.registerComponent('Kimmy', ()=> KimmyScreen);