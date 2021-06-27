import { shallow } from 'enzyme';
import React from 'react';
import Mainpage from './Mainpage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false,
    };
    wrapper = shallow(<Mainpage {...mockProps} />);
});

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false,
    };
    const wrapper2 = shallow(<Mainpage {...mockProps} />)
    expect(wrapper2.instance().filteredRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
});

it('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false,
    };
    const filteredRobots = [];
    const wrapper3 = shallow(<Mainpage {...mockProps3 } />)
    expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);
});