import React from 'react';
import { shallow } from 'enzyme';
import Link from '.';

describe('@component Link', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<Link />)).to.have.length(1);
  });
  it('should render normal with children content', () => {
    expect(shallow(<Link>Link</Link>)).to.have.length(1);
  });
});

