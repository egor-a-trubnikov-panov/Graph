import React from 'react';
import { shallow } from 'enzyme';
import Layout from '.';

describe('@component Layout', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<Layout />)).to.have.length(1);
  });
  it('should render normal with children content', () => {
    expect(shallow(<Layout>Layout</Layout>)).to.have.length(1);
  });
});

