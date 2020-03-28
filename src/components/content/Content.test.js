import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import Content from './Content';
import toJson from 'enzyme-to-json';

const contentElement = <Content />;
test('render content js without crash', () => {
    const { getByText } = render(contentElement);
    const linkElement = getByText(/ATM branches/i);
    expect(linkElement).toBeInTheDocument();
});


// full Content component testing with enzyme
it('check content component elements', () => {
    const wrapper = mount(contentElement);
    expect(wrapper.find('ul')).toExist();
    expect(wrapper.find('span')).not.toExist();
});

it('check content component class', () => {
    const wrapper = mount(contentElement);
    expect(wrapper.find('.active')).toHaveClassName('.active');
});

it('check content component html element', () => {
    const wrapper = mount(contentElement);
    expect(wrapper.find('div')).toExist();
});

it('check content component click event', () => {
    const contentElementNew = mount(contentElement);
    contentElementNew.find('.sidebar li:first-child').simulate('click');
    expect(toJson(contentElementNew)).toMatchSnapshot();
});