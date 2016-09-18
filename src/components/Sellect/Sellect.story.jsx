import React, { Component } from 'react';
import storiesOf from '../../utils/storiesOf.js';
import Sellect from '.';

class SelectWrapper extends Component {
  state = {
    value: 'Борис'
  };

  handleChange = value => {
    this.setState({
      value
    });
  };

  render() {
    const { value } = this.state;
    return (<Sellect
      onChange={this.handleChange}
      selectedValue={value}
      {...this.props}
    />);
  }
}

storiesOf('Sellect')
  .addWithInfo('Default without props', () => (
    <Sellect />
  ))
  .addWithInfo('With value', () => (
    <Sellect
      value={[1, 2, 3, 4, 5]}
    />
  ))
  .addWithInfo('With change', () => (
    <SelectWrapper
      value={['Борис', 'Иван', 'Степан']}
    />
  ));

