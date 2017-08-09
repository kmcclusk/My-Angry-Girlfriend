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

export default class SansaScreen extends Component {

  static navigationOptions = {
    title: 'Sansa',
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
        messages: require('../../Texting/data/sansaText.js'),
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
    const{ navigate } = this.props.navigation;
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || messages[0].text || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'Sansa is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {


          if (messages[0].text === "Sure!") {
            this.onReceive("Great, I'll see you tonight?");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Where would you like to go?");
              this.onReceive("Text a response back: \n 1. It's a surprise \n 2. To the new place that just opened. Super romantic \n 3. I dont't really care \n 4. Whatever you want");
            }, 1000);
          } else if (messages[0].text === "Maybe, I don't know?") {
            this.state.score = this.state.score - 5;
            this.onReceive("You obvioulsy do. I'll see you tonight");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Where would you like to go?");
              this.onReceive("Text a response back: \n 1. It's a surprise \n 2. To the new place that just opened. Super romantic \n 3. I dont't really care \n 4. Whatever you want");
            }, 1000);
          } else if (messages[0].text === "Definitely not, gross!") {
            this.state.score = this.state.score - 25;
            this.onReceive('As if I would ever want to go out with someone as lowly as you!');
            this.endGame();
          } else if (messages[0].text === "No thanks") {
            this.state.score = this.state.score - 10;
            this.onReceive("I don't take no for an answer");
            this.endGame();
            setTimeout(() => {
              this.onReceive("Where would you like to go?");
              this.onReceive("Text a response back: \n 1. It's a surprise \n 2. To the new place that just opened. Super romantic \n 3. I dont't really care \n 4. Whatever you want");
            }, 1000);


          } else if (messages[0].text === "It's a surprise") {
            this.state.score = this.state.score - 5;
            this.onReceive("I don't like surprises, but whatever");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You better be taking me to a dinner and a show");
              this.onReceive("Text a response back: \n 1. It's still a surprise \n 2. Maybe \n 3. I can't afford that right now \n 4. Anything for you");
            }, 1000);
          } else if (messages[0].text === "To the new place that just openeded. Super romantic") {
            this.onReceive("That sounds nice. I better be good though");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You better be taking me to a dinner and a show");
              this.onReceive("Text a response back: \n 1. It's still a surprise \n 2. Maybe \n 3. I can't afford that right now \n 4. Anything for you");
            }, 1000);
          } else if (messages[0].text === "I don't really care") {
            this.state.score = this.state.score - 25;
            this.onReceive("You are so lazy. Consider yourself dumped.");
            this.endGame();
          } else if (messages[0].text === "Whatever you want") {
            this.state.score = this.state.score - 10;
            this.onReceive("You're not putting in any effort. You're taking me everywhere then");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You better be taking me to a dinner and a show");
              this.onReceive("Text a response back: \n 1. It's still a surprise \n 2. Maybe \n 3. I can't afford that right now \n 4. Anything for you");
            }, 1000);


          } else if (messages[0].text === "It's still a surprise") {
            this.state.score = this.state.score - 5;
            this.onReceive("Again, I don't like surprise. You're on thin ice");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You also need to pick me up in a luxury car. I deserve the best");
              this.onReceive("Text a response back: \n 1. I think that is a little much \n 2. I drive a minivan \n 3. I already own a Porsche \n 4. I'll stop by the rental lot");
            }, 1000);
          } else if (messages[0].text === "Maybe") {
            this.state.score = this.state.score - 10;
            this.onReceive("Maybe? You sound feeble and week. Be more confident");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You also need to pick me up in a luxury car. I deserve the best");
              this.onReceive("Text a response back: \n 1. I think that is a little much \n 2. I drive a minivan \n 3. I already own a Porsche \n 4. I'll stop by the rental lot");
            }, 1000);
          } else if (messages[0].text === "I can't afford that right now") {
            this.state.score = this.state.score - 25;
            this.onReceive("Really!? You are such a scrub. Bye!");
            this.endGame();
          } else if (messages[0].text === "Anything for you") {
            this.onReceive("Perfect");
            this.endGame();
            setTimeout(() => {
              this.onReceive("You also need to pick me up in a luxury car. I deserve the best");
              this.onReceive("Text a response back: \n 1. I think that is a little much \n 2. I drive a minivan \n 3. I already own a Porsche \n 4. I'll stop by the rental lot");
            }, 1000);


          } else if (messages[0].text === "I think that is a little much") {
            this.state.score = this.state.score - 10;
            this.onReceive("You're a little much. I'm worth it");
            this.endGame();
            setTimeout(() => {
              this.onReceive("This isn't going to work, you're just not on my level");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);
          } else if (messages[0].text === "I drive a minivan") {
            this.state.score = this.state.score - 25;
            this.onReceive("Um... no");
            this.endGame();
            setTimeout(() => {
              this.onReceive("This isn't going to work, you're just not on my level");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);
          } else if (messages[0].text === "I already own a Porsche") {
            this.onReceive("Wow!");
            this.endGame();
            setTimeout(() => {
              this.onReceive("This isn't going to work, you're just too extra");
              this.onReceive("Score: " + this.state.score + " out of 25");
              setTimeout(() => {
                navigate("Main");
              }, 5000);
            }, 1000);
          } else if (messages[0].text === "I'll stop by the rental lot") {
            this.state.score = this.state.score - 5;
            this.onReceive("Really? A rental? Okay");
            this.endGame();
            setTimeout(() => {
              this.onReceive("This isn't going to work, you're just not on my level");
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
              this.onReceive('Are you stupid?');
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
            name: 'Sansa',
            avatar: 'https://drive.google.com/uc?id=0B2RuATwqhKZ-cVdKUVdrckhPQ1U',
          },
        }),
      };
    });
  }

  endGame() {
    const {navigate} = this.props.navigation;
    if (this.state.score <= 0) {
      setTimeout(() => {
        this.onReceive("I'm a queen and you're a peasant. This will never work");
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

AppRegistry.registerComponent('Sansa', ()=> SansaScreen);