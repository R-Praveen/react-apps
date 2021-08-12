import React, { useState, ChangeEvent, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../redux/rootReducer';
import FormField from '../FormField/FormField';
import Input from '../Input/Input';
import styles from './Search.module.scss';

interface SearchInterface {
    onSearch: Function;
    placeholder?: string;
    clearSearch?: boolean;
    onClear?: Function;
}

const Search: React.FunctionComponent<SearchInterface> = (props) => {
    console.log('Component - Search');

    const { onSearch, placeholder, clearSearch, onClear } = props;
    const themeData = useSelector((state: RootState) => state.theme);
    const { isDarkMode, searchBackground, searchTextColor } = themeData;
    const [searchValue, setSearchValue] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (clearSearch && searchValue) setSearchValue('');
        onClear && onClear();
    }, [clearSearch, searchValue, onClear]);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) setError('');

        const value = e.target.value;

        setSearchValue(value);
        onSearch(value);
    };

    return (
        <form className={`${styles.search} ${isDarkMode ? styles.dark : ''}`}>
            <FormField error={error}>
                <Input
                    type="search"
                    value={searchValue}
                    onChange={onChange}
                    placeholder={placeholder ? placeholder : ''}
                    style={{
                        backgroundColor: isDarkMode && searchBackground,
                        color: isDarkMode && searchTextColor,
                    }}
                />
            </FormField>
        </form>
    );
};

export default Search;
