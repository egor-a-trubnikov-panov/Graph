import React from 'react';
import { shallow } from 'enzyme';
import Sellect from '.';

describe('@component Sellect', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<Sellect />)).to.have.length(1);
  });
  it('should render normal with children content', () => {
    expect(shallow(<Sellect>Sellect</Sellect>)).to.have.length(1);
  });
});

