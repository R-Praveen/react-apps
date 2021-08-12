import { combineReducers, Action } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { blogReducer } from './blog/blogReducer';
import { facetReducer } from './facet/facetReducer';
import { memberReducer } from './member/memberReducer';
import { themeReducer } from './theme/themeReducer';

export interface ActionInterface extends Action {
    payload?: any;
}

export const rootReducer = combineReducers({
    blog: blogReducer,
    member: memberReducer,
    facet: facetReducer,
    theme: themeReducer,
    form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
