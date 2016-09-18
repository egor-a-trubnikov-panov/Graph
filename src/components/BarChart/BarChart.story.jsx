import React from 'react';
import storiesOf from '../../utils/storiesOf.js';
import BarChart from '.';

storiesOf('BarChart')
  .addWithInfo('Default without props', () => (
    <BarChart />
  ))
  .addWithInfo('With data', () => (
    <BarChart
      data={[
        { x: 'USD', y: 91 },
        { x: 'EUR', y: 50 },
        { x: 'YAY', y: 30 }
      ]}
    />
  ))
  .addWithInfo('With data and labels', () => (
    <BarChart
      data={[
        { x: 'USD', y: 91 },
        { x: 'EUR', y: 50 },
        { x: 'YAY', y: 30 }
      ]}
      yAxisLabel='RUB'
      xAxisLabel=''
    />
  ));

