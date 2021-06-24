import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundary from './ErrorBoundry';

it('expect to render ErrorBoundry component', () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});
