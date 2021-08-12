import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Facet from '../../components/Facet/Facet';
import Logo from '../../components/Logo/Logo';
import { CONSTANTS } from '../../constants/constants';
import { setDarkMode, populateFacets } from '../../redux';
import { RootState } from '../../redux/rootReducer';
import { Filter } from '../../types/types';
import styles from './SideBar.module.scss';

interface SideBarInterface {
    toggleOverlay?: Function;
}

const SideBar: React.FunctionComponent<SideBarInterface> = ({
    toggleOverlay,
}) => {
    console.log('Component - Side Bar');

    const { SIDE_BAR_OPTIONS } = CONSTANTS;
    const facetData = useSelector((state: RootState) => state.facet);
    const themeData = useSelector((state: RootState) => state.theme);
    const { isDarkMode, sideBarBackground, textColor } = themeData;
    const dispatch = useDispatch();

    const updateFacets = (filterValue: string, facetType: string) => {
        const _facets = { ...facetData };

        _facets[facetType] = _facets[facetType].map((filter: Filter) => {
            if (filter.value === filterValue) {
                filter.checked = !filter.checked;
            }
            return filter;
        });

        dispatch(populateFacets(_facets));
    };

    return (
        <div
            className={styles.sideBar}
            style={{
                backgroundColor: isDarkMode && sideBarBackground,
                color: isDarkMode && textColor,
            }}
        >
            <Logo />
            {facetData && facetData.type ? (
                <Facet
                    title={CONSTANTS.FACETS.TYPE.TITLE}
                    type={CONSTANTS.FACETS.TYPE.NAME}
                    filters={facetData.type}
                    updateFacets={(filterValue: string) =>
                        updateFacets(filterValue, CONSTANTS.FACETS.TYPE.NAME)
                    }
                />
            ) : null}
            <div className={styles.sideBarOptions}>
                <div
                    onClick={() => {
                        toggleOverlay && toggleOverlay();
                    }}
                >
                    {SIDE_BAR_OPTIONS.VIEW_MEMBERS}
                </div>
                <div
                    onClick={() => {
                        dispatch(setDarkMode(!isDarkMode));
                    }}
                    data-testid="themeMode"
                >
                    {isDarkMode
                        ? SIDE_BAR_OPTIONS.MODE.DARK
                        : SIDE_BAR_OPTIONS.MODE.LIGHT}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
