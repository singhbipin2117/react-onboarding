import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import Header from './Header';

test('render header js without crash', () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/Find Near by/i);
    expect(linkElement).toBeInTheDocument();
});


// full Header component testing with enzyme
it('check header component elements', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('ul')).toExist();
    expect(wrapper.find('span')).not.toExist();
});

it('check header component class', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('.header')).toHaveClassName('.header');
});

it('check header component html element', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('b')).toExist();
});