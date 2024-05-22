import React from 'react';
import './Button.scss';

const Button = ({
  variants = 'primary',
  disable,
  children,
  onClick,
}) => {
  return (
    <button
      className={`btn btn-${variants} ${disable ? 'disable' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
