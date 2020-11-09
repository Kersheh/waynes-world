import React from 'react';
import { useFormContext } from 'react-hook-form';

import styles from './TextArea.module.scss';

interface TextAreaProps {
  name: string;
  label?: string;
  required?: boolean;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnlyValue?: string;
}
const TextArea = ({
  name,
  label,
  required,
  maxLength,
  onChange,
  readOnlyValue
}: TextAreaProps) => {
  const { watch, register } = readOnlyValue
    ? { watch: null, register: null }
    : useFormContext(); // eslint-disable-line react-hooks/rules-of-hooks

  return (
    <div className={styles.textArea}>
      {label && (
        <div className={styles.label}>
          {label}
          {required && ' *'}
        </div>
      )}
      <textarea
        name={name}
        required={required}
        maxLength={maxLength}
        ref={readOnlyValue ? undefined : register}
        onChange={onChange}
        defaultValue={readOnlyValue || undefined}
        disabled={!!readOnlyValue}
      />
      {maxLength && watch && (
        <div className={styles.counter}>
          {watch()[name]?.length ?? 0} / {maxLength}
        </div>
      )}
    </div>
  );
};

export default TextArea;
