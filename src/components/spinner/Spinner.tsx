import React from 'react';
import classNames from 'classnames/bind';

import styles from './Spinner.module.scss';

const cx = classNames.bind(styles);

interface SpinnerProps {
  isFullscreen?: boolean;
  show?: boolean;
}
const Spinner = ({ isFullscreen = true, show = true }: SpinnerProps) => {
  return (
    <>
      {show && (
        <div
          className={cx({
            spinner: true,
            isFullscreen
          })}
        >
          <div className={styles.spinnerIcon} />
        </div>
      )}
    </>
  );
};

export default Spinner;
