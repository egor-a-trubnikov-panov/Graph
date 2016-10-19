import React, { Component, PropTypes as pt } from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter, VictoryTheme } from 'victory';

const isBrowser = typeof window !== 'undefined';

const LineChart = ({ data, domain }) => (
  <VictoryChart
    height={isBrowser ? window.innerHeight / 2 : 450}
    width={isBrowser ? window.innerWidth : 1440}
    theme={VictoryTheme.material}
    padding={{
      left: 60,
      right: 20,
      top: 20,
      bottom: 30
    }}
  >
    <VictoryAxis />
    <VictoryAxis
      dependentAxis
      domain={domain}
    />
    <VictoryLine
      data={data}
    />
    <VictoryScatter
      style={{
        data: {
          fill: 'tomato'
        },
        labels: {
          fill: 'tomato',
          fontSize: 10,
          padding: 2
        }
      }}
      data={data}
      size={3}
    />
  </VictoryChart>
);

LineChart.propTypes = {
  data: pt.any,
  period: pt.any,
  domain: pt.any
};

LineChart.defaultProps = {
  period: 0
};

export default LineChart;
