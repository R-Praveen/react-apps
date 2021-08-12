import React, { useState, useEffect, useCallback } from 'react';

import { CONSTANTS } from '../../constants/constants';

interface PosterInterface {
    posterUrl: string;
    onSelection?: Function;
    className: string;
}

const placeholderImage = CONSTANTS.ASSETS.PLACEHOLDER;

const Poster: React.FunctionComponent<PosterInterface> = ({
    posterUrl,
    className,
}) => {
    console.log('Component - Poster');

    const [imageSrc, setImageSrc] = useState(posterUrl);

    useEffect(() => {
        setImageSrc(posterUrl || placeholderImage);
    }, [posterUrl]);

    return (
        <div className={className}>
            <img
                src={imageSrc}
                onError={useCallback(() => setImageSrc(placeholderImage), [])}
                alt="poster"
            />
        </div>
    );
};

export default React.memo(Poster);
