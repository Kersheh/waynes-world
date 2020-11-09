import React, { useState } from 'react';
import classNames from 'classnames/bind';
import ColorThief from 'colorthief';

import { rgbToHex } from 'utils';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);
const colorThief = new ColorThief();

interface ImageProps {
  src: string;
  alt?: string;
  className?: any;
  getImgDominantHexColor?: (hex: string) => void;
}
const Image = ({ src, alt, className, getImgDominantHexColor }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={styles.image}>
      <img
        style={isLoaded ? {} : { display: 'none' }}
        src={src}
        alt={alt}
        onLoad={async x => {
          setIsLoaded(true);

          if (getImgDominantHexColor) {
            const rgb: [number, number, number] = await colorThief.getColor(
              x.target
            );
            getImgDominantHexColor(rgbToHex(...rgb));
          }
        }}
        className={className}
        draggable={false}
      />
      {!isLoaded && (
        <div
          className={cx({
            [className]: true,
            placeholderWrapper: true
          })}
        >
          <img
            src="/images/placeholder.svg"
            alt="Loading placeholder"
            className={styles.placeholder}
          />
        </div>
      )}
    </div>
  );
};

export default Image;
