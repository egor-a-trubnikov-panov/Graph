import React from 'react';
import storiesOf from '../../utils/storiesOf.js';
import Text from '.';

class TextWrapper extends React.Component {
  state = {
    mode: 'default',
    value: 'text'
  };

  handleChangeMode = mode => {
    this.setState({mode})
  };
  handleChangeText = newValue => {
    this.setState({value: newValue})
  };

  render() {
    // const {children} = this.props;
    const {mode, value} = this.state;
    return (
      <Text
        {...this.props}
        onChangeText={this.handleChangeText}
        onChangeMode={this.handleChangeMode}
        mode={mode}
      >
        {value}
      </Text>
    );
  }
}

storiesOf('Text')
  .addWithInfo('Default without props', () => (
    <Text />
  ))
  .addWithInfo('Default with children', () => (
    <Text>Text</Text>
  ))
  .addWithInfo('With changed mode', () => (
    <TextWrapper mode='changed'>Text</TextWrapper>
  ));

