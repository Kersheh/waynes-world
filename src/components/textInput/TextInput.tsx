import React from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';

import styles from './TextInput.module.scss';

const cx = classNames.bind(styles);

interface TextInputProps {
  name: string;
  label?: string;
  required?: boolean;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
const TextInput = ({
  name,
  label,
  required,
  maxLength,
  onChange,
  error
}: TextInputProps) => {
  const { watch, register } = useFormContext();

  return (
    <div className={styles.textInput}>
      {label && (
        <div className={styles.label}>
          {label}
          {required && ' *'}
        </div>
      )}
      <input
        type="text"
        name={name}
        required={required}
        maxLength={maxLength}
        ref={
          required ? register({ required: `${label} is required.` }) : register
        }
        onChange={onChange}
        className={cx({ hasError: !!error })}
      />
      {maxLength && (
        <div className={styles.counter}>
          {watch()[name]?.length ?? 0} / {maxLength}
        </div>
      )}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default TextInput;
