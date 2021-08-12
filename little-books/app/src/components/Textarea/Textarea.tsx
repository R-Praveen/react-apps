import React, { forwardRef } from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../redux/rootReducer';

const Textarea: React.FunctionComponent<any> = forwardRef((props, ref) => {
    console.log('Component - Textarea');

    const themeData = useSelector((state: RootState) => state.theme);
    const { isDarkMode, textColor } = themeData;

    return (
        <textarea
            ref={ref}
            {...props}
            style={{
                color: isDarkMode && textColor,
            }}
        >
            {props.value}
        </textarea>
    );
});

Textarea.displayName = 'Textarea';

export default React.memo(Textarea);
