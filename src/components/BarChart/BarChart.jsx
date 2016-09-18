import React, { Component, PropTypes as pt } from 'react';
import rd3 from 'react-d3';

const isBrowser = typeof window !== 'undefined';

export default class BarChart extends Component {
  static propTypes = {
    data: pt.array,
    yAxisLabel: pt.string,
    xAxisLabel: pt.string,
    fill: pt.string,
    title: pt.string
  };

  static defaultProps = {
    data: [
      { x: 1, y: 91 },
      { x: 2, y: 50 },
      { x: 3, y: 30 }
    ],
    yAxisLabel: '',
    xAxisLabel: '',
    fill: '#3182bd',
    title: ''
  };

  render() {
    const { data } = this.props;
    return (
      <rd3.BarChart
        {...this.props}
        data={[
          {
            values: data
          }
        ]}
        margins={{
          left: 60,
          right: 20,
          top: 20,
          bottom: 30
        }}
        height={isBrowser ? window.innerHeight / 2 : 450}
        width={isBrowser ? window.innerWidth : 1440}
      />
    );
  }
}
