import React from 'react';

import { CONSTANTS } from '../../constants/constants';
import { Filter } from '../../types/types';
import Checkbox from '../Checkbox/Checkbox';
import styles from './Facet.module.scss';

interface FacetInterface {
    title?: string;
    type?: string;
    filters: Filter[];
    updateFacets: Function;
}

const Facet: React.FunctionComponent<FacetInterface> = (props) => {
    console.log('Component - Facet');

    const { filters, title, updateFacets, type } = props;

    return (
        <div className={styles.facet}>
            {title ? <div className={styles.title}>{title}</div> : null}
            <ul>
                {filters.map((filter, index) => (
                    <li key={index}>
                        <Checkbox
                            id={index.toString()}
                            label={
                                type === CONSTANTS.FACETS.TYPE.NAME
                                    ? `${filter.value}${CONSTANTS.FACETS.TYPE.SUFFIX}`
                                    : filter.value
                            }
                            value={filter.value}
                            onChange={updateFacets}
                            checked={filter.checked}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Facet;
