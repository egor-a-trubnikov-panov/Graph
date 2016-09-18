import React from 'react';
import { shallow } from 'enzyme';
import Detail from '.';

describe('@component Detail', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<Detail />)).to.have.length(1);
  });
  it('should render normal with children content', () => {
    expect(shallow(<Detail>Detail</Detail>)).to.have.length(1);
  });
});

