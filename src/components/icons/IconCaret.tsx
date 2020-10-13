import React from 'react';

interface IconCaretProps {
  className?: any;
}
const IconCaret = ({ className }: IconCaretProps) => {
  return (
    <svg
      viewBox="0 0 574 1024"
      aria-labelledby="fqsi-ant-right-title"
      id="si-ant-right"
      className={className}
    >
      <path d="M10 9Q0 19 0 32t10 23l482 457L10 969Q0 979 0 992t10 23q10 9 24 9t24-9l506-480q10-10 10-23t-10-23L58 9Q48 0 34 0T10 9z" />
    </svg>
  );
};

export default IconCaret;
