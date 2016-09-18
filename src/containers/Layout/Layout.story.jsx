import React from 'react';
import storiesOf from '../../utils/storiesOf.js';
import Layout from '.';

storiesOf('Layout')
  .addWithInfo('Default without props', () => (
    <Layout />
  ))
  .addWithInfo('Default with children', () => (
    <Layout>Layout</Layout>
  ));

