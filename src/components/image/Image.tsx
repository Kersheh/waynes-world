import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Image.module.scss';

const cx = classNames.bind(styles);

interface ImageProps {
  src: string;
  alt?: string;
  className?: any;
}
const Image = ({ src, alt, className }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={styles.image}>
      <img
        style={isLoaded ? {} : { display: 'none' }}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
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
