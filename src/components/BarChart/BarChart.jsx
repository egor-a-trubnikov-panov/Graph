import React, { Component, PropTypes as pt } from 'react';
import rd3 from 'react-d3';

const isBrowser = typeof window !== 'undefined';

const BarChart = props => (
  <rd3.BarChart
    {...props}
    data={[
      {
        values: props.data
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

BarChart.propTypes = {
  data: pt.array,
  yAxisLabel: pt.string,
  xAxisLabel: pt.string,
  fill: pt.string,
  title: pt.string
};

BarChart.defaultProps = {
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

export default BarChart;
