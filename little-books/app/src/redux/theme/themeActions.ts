import { SET_DARK_MODE } from './themeTypes';

export const setDarkMode = (darkMode: boolean = false) => {
    return {
        type: SET_DARK_MODE,
        payload: {
            isDarkMode: darkMode,
        },
    };
};
