import React from 'react';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  htmlType?: string;
}

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
};

export default Button;
