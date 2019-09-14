/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header';

describe('Header', () => {
  test('Renders the header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header').length).toBe(1);
  });
});
