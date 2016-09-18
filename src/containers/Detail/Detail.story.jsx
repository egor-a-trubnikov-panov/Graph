import React from 'react';
import storiesOf from '../../utils/storiesOf.js';
import Detail from '.';

storiesOf('Detail')
  .addWithInfo('Default without props', () => (
    <Detail />
  ))
  .addWithInfo('Default with children', () => (
    <Detail>Detail</Detail>
  ));

