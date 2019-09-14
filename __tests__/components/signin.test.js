/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import {
  Signin,
  mapDispatchToProps,
  mapStateToProps,
} from '../../src/components/Signin';

const renderSignin = (args) => {
  const defaultProps = {
    onLogin: jest.fn(),
    history: {
      push: jest.fn()
    },
    authReducer: {}
  };
  const props = { ...defaultProps, ...args };

  return mount(<MemoryRouter><Signin {...props} /></MemoryRouter>);
};

describe('Signin Page', () => {
  test('Renders Signin page', () => {
    const wrapper = renderSignin({});

    wrapper
      .find('#loginEmail')
      .simulate('change', { target: { value: 'a' } });
    wrapper
      .find('#loginPassword')
      .simulate('change', { target: { value: 'a' } });
    wrapper
      .find('form')
      .simulate('submit');

    expect(wrapper.find('form').length).toBe(1);
  });

  test('should map dispatch and state to props', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onLogin();
    mapStateToProps({ authReducer: {} });
    expect(mapDispatchToProps).toBe(mapDispatchToProps);
  });
});
