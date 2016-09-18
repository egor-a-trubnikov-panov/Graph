import React from 'react';
import { shallow } from 'enzyme';
import BarChart from '.';

describe('@component BarChart', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<BarChart />)).to.have.length(1);
  });
  it('should render normal with children content', () => {
    expect(shallow(<BarChart>BarChart</BarChart>)).to.have.length(1);
  });
});

