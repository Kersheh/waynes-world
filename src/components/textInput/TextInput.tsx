import React from 'react';
import { useFormContext } from 'react-hook-form';

import styles from './TextInput.module.scss';

interface TextInputProps {
  name: string;
  label?: string;
  required?: boolean;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextInput = ({
  name,
  label,
  required,
  maxLength,
  onChange
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
        ref={register}
        onChange={onChange}
      />
      {maxLength && (
        <div className={styles.counter}>
          {watch()[name]?.length ?? 0} / {maxLength}
        </div>
      )}
    </div>
  );
};

export default TextInput;
