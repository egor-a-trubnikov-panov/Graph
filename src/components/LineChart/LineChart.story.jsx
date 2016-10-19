import React, { Component } from 'react';
import storiesOf from '../../utils/storiesOf.js';
import LineChart from '.';
import round from '../../utils/round';


class IntervalLineChart extends Component {
  componentDidMount() {
    this.loadInterval = setInterval(() => {
      const { year, data } = this.state;
      const newYear = String(Number(year) + 1);
      const newData = this.addToStack([...data], { x: newYear, y: round(Math.random() * 100, 2) });
      const newState = {
        year: newYear,
        data: newData
      };
      this.setState(newState);
    }, 5000);
  }

  componentWillUnmount() {
    if (this.loadInterval) {
      clearInterval(this.loadInterval);
    }
    this.loadInterval = false;
  }

  loadInterval = false;

  state = {
    year: '1989',
    data: [
      { x: '1989', y: 50 }
    ]
  };

  addToStack = (stack, newValue) => {
    if (stack.length > 4) {
      stack.shift(1);
    }
    stack.push(newValue);
    return [...stack];
  };

  render() {
    return (
      <LineChart
        {...this.props}
        data={this.state.data}
      />
    );
  }
}

storiesOf('LineChart')
  .addWithInfo('Default without props', () => (
    <LineChart />
  ))
  .addWithInfo('With data', () =>
    (<LineChart
      data={[
        { x: 1987, y: 257 },
        { x: 1993, y: 345 },
        { x: 1997, y: 515 },
        { x: 2001, y: 132 },
        { x: 2005, y: 305 },
        { x: 2011, y: 270 },
        { x: 2015, y: 470 }
      ]}
    />)
  )
  .addWithInfo('With interval', () =>
    (<IntervalLineChart />)
  );
