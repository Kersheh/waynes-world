import React from 'react';
import { useFormContext } from 'react-hook-form';

import styles from './TextArea.module.scss';

interface TextAreaProps {
  name: string;
  label?: string;
  required?: boolean;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextArea = ({
  name,
  label,
  required,
  maxLength,
  onChange
}: TextAreaProps) => {
  const { watch, register } = useFormContext();

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

export default TextArea;
