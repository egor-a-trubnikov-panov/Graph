import React from 'react';
import { shallow } from 'enzyme';
import LineChart from '.';

describe('@component LineChart', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<LineChart />)).to.have.length(1);
  });
  it('should render normal with children content', () => {
    expect(shallow(<LineChart>LineChart</LineChart>)).to.have.length(1);
  });
});

