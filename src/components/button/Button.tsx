import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export interface ButtonProps {
  children?: React.ReactNode;
  name?: string;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  styleType?:
    | 'basic'
    | 'text'
    | 'textIcon'
    | 'icon'
    | 'fullWidth'
    | 'tile'
    | 'listItem'
    | 'outline';
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
        text: styleType === 'text' || styleType === 'textIcon',
        textIcon: styleType === 'textIcon',
        icon: styleType === 'icon',
        fullWidth: styleType === 'fullWidth',
        tile: styleType === 'tile',
        listItem: styleType === 'listItem',
        outline: styleType === 'outline'
      })}
      onTouchStart={() => {}}
    >
      {children}
    </button>
  );
};

export default Button;
