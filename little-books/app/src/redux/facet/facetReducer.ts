import { Facets } from '../../types/types';
import { ActionInterface } from '../rootReducer';
import { POPULATE_FACETS } from './facetTypes';

export const facetReducer = (state: Facets = {}, action: ActionInterface) => {
    switch (action.type) {
        case POPULATE_FACETS:
            return (action.payload ? action.payload : {}) as Facets;
        default:
            return state;
    }
};
