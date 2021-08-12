import React from 'react';

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../../redux/store';
import Logo from '../Logo';

it('matches snapshot', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <Logo />
            </Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
