import React from 'react';
import storiesOf from '../../utils/storiesOf.js';
import Link from '.';

storiesOf('Link')
  .addWithInfo('Default without props', () => (
    <Link />
  ))
  .addWithInfo('Default with children', () => (
    <Link>Link</Link>
  ));

