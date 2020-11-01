import React from 'react';
import { useDispatch } from 'react-redux';

import IconX from 'components/icons/IconX';
import Button from 'components/button/Button';
import { clearErrorMessageAction } from './errorActions';
import styles from './Error.module.scss';

interface ErrorContainerProps {
  message: string;
}
const ErrorContainer = ({ message }: ErrorContainerProps) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.error}>
      <div className={styles.message}>
        <span>{message}</span>
        <Button onClick={() => dispatch(clearErrorMessageAction())}>
          <IconX />
        </Button>
      </div>
    </div>
  );
};

export default ErrorContainer;
