import * as actions from './actions';
import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING } from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('actions', () => {
    it('should create an action to search Robots', () => {
        const text = 'woooo';
        const expectedAction = {
            type: CHANGE_SEARCHFIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });
});

describe('Fetch robots action PENDING', () => {
    it('should create a PENDING action on request Robots', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING,
        };
        expect(action[0]).toEqual(expectedAction);
    });
});
