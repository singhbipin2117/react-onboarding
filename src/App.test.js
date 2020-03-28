import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

const appElement = <App />;
it('ender app successfully', () => {
  const wrapper = mount(appElement);
  expect(toJson(wrapper)).toMatchSnapshot();
});


it('check app component click event', () => {
  const appElementNew = mount(appElement);
  appElementNew.find('.sidebar li:first-child').simulate('click');
  expect(toJson(appElementNew)).toMatchSnapshot();
});

it('check app component click event on second element', () => {
  const appElementNew = mount(appElement);
  appElementNew.find('.sidebar [value="pharmacy"]').simulate('click');
  expect(toJson(appElementNew)).toMatchSnapshot();

  // click on third element
  appElementNew.find('.sidebar [value="hospital"]').simulate('click');
  expect(toJson(appElementNew)).toMatchSnapshot();
});