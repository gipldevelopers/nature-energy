import React from 'react';
import { imageSet } from '../../data/siteData';

export function SafeImage({ src, alt, className }) {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading="lazy"
            onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = imageSet.heroBg;
            }}
        />
    );
}
