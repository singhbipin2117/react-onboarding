import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import Sidebar from './Sidebar';
import { sideTab } from '../../static/tabs';

const mockCallBack = jest.fn();
let activeTab = sideTab[0]['label'];
let sidebarElement = <Sidebar tab={sideTab} active={activeTab} onClick={mockCallBack} />;
test('render sidebar js without crash', () => {
    const { getByText } = render(sidebarElement);
    const linkElement = getByText(/ATM branches/i);
    expect(linkElement).toBeInTheDocument();
});


// full Sidebar component testing with enzyme
it('check sidebar component elements', () => {
    const wrapper = mount(sidebarElement);
    expect(wrapper.find('ul')).toExist();
    expect(wrapper.find('span')).not.toExist();
});

it('check sidebar component class', () => {
    const wrapper = mount(sidebarElement);
    expect(wrapper.find('.active')).toHaveClassName('.active');
});

it('check sidebar component html element', () => {
    const wrapper = mount(sidebarElement);
    expect(wrapper.find('div')).toExist();
});

it('check sidebar component click event', () => {
    const sidebarElementNew = mount(sidebarElement);
    sidebarElementNew.find('li:first-child').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);

    sidebarElementNew.find('li:first-child').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(2);
});