import { CONSTANTS } from '../../constants/constants';
import { ActionInterface } from '../rootReducer';
import { SET_DARK_MODE } from './themeTypes';

const { DARK_MODE } = CONSTANTS;

const initialThemeState = {
    isDarkMode: false,
    sideBarBackground: DARK_MODE.SECONDARY_DARK,
    textColor: DARK_MODE.TEXT,
    blogDisplayBackground: DARK_MODE.PRIMARY_DARK,
    blogDetailsBackground: DARK_MODE.SECONDARY_DARK,
    addBlogBackground: DARK_MODE.PRIMARY_DARK,
    searchBackground: DARK_MODE.SECONDARY_DARK,
    searchTextColor: DARK_MODE.SEARCH_TEXT,
    blogBackground: DARK_MODE.TERTIARY_DARK,
    blogSelectedBackground: DARK_MODE.SELECTED,
    cityTextColor: DARK_MODE.CITY_TEXT,
};

type ThemeState = typeof initialThemeState;

export const themeReducer = (
    state: ThemeState = initialThemeState,
    action: ActionInterface
) => {
    switch (action.type) {
        case SET_DARK_MODE:
            return {
                ...state,
                isDarkMode: action.payload.isDarkMode,
            };
        default:
            return state;
    }
};
