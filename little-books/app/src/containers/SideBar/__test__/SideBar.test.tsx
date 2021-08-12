import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import { CONSTANTS } from '../../../constants/constants';
import { store } from '../../../redux/store';
import SideBar from '../SideBar';

const { SIDE_BAR_OPTIONS } = CONSTANTS;

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <SideBar />
        </Provider>,
        div
    );
});

it('functions correctly', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <SideBar />
        </Provider>
    );

    const themeMode = getByTestId(/themeMode/i) as HTMLDivElement;

    expect(themeMode.textContent).toBe(SIDE_BAR_OPTIONS.MODE.LIGHT);

    fireEvent.click(themeMode);

    expect(themeMode.textContent).toBe(SIDE_BAR_OPTIONS.MODE.DARK);

    fireEvent.click(themeMode);

    expect(themeMode.textContent).toBe(SIDE_BAR_OPTIONS.MODE.LIGHT);
});
