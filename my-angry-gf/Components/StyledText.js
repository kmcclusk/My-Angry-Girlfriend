import React from 'react';
import { Text } from 'react-native';

export class TimesNewRomance extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: 'Times_New_Romance' }]}
      />
    );
  }
}