import { Facets } from '../../types/types';
import { POPULATE_FACETS } from './facetTypes';

export const populateFacets = (facets: Facets) => {
    return {
        type: POPULATE_FACETS,
        payload: facets,
    };
};
