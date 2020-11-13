import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export interface ButtonProps {
  children?: React.ReactNode;
  name?: string;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  styleType?: 'basic' | 'text' | 'fullWidth' | 'tile' | 'listItem';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Button = ({
  children,
  name,
  type = 'button',
  disabled = false,
  styleType = 'text',
  onClick
}: ButtonProps) => {
  return (
    <button
      name={name}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cx({
        button: true,
        basic: styleType === 'basic',
        text: styleType === 'text',
        fullWidth: styleType === 'fullWidth',
        tile: styleType === 'tile',
        listItem: styleType === 'listItem'
      })}
      onTouchStart={() => {}}
    >
      {children}
    </button>
  );
};

export default Button;
