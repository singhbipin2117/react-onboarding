import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import Map from './Map';
import { sideTab } from '../../static/tabs';

let searchText = sideTab[0]['name'];
let latitude = 19.075983;
let longitude = 72.877655;
let mapElement = <Map latitude={latitude} longitude={longitude} searchtext={searchText} />;
test('render Map without crash', () => {
    render(mapElement);
});


// full Map component testing with enzyme
it('check map component elements', () => {
    const wrapper = mount(mapElement);
    expect(wrapper.find('div')).toExist();
    expect(wrapper.find('span')).not.toExist();
});

it('check map component class', () => {
    const wrapper = mount(mapElement);
    expect(wrapper.find('.map')).toHaveClassName('.map');
});

it('check map component html element', () => {
    const wrapper = mount(mapElement);
    expect(wrapper.find('div')).toExist();
});

searchText = sideTab[2]['name'];
test('render Map after changing search textvalue without crash', () => {
    render(mapElement);
});