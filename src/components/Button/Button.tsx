import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import { getPrefixCls } from '@/system/prefixCls';
import { alpha } from '@/system/colorManipulator';

export type HtmlType = 'button' | 'reset' | 'submit';
export type Type = 'default' | 'primary' | 'warning' | 'danger'; // | 'ghost' | 'dashed' | 'link';
export interface ButtonProps {
  children?: React.ReactNode;
  htmlType?: HtmlType;
  type?: Type;
  loading?: Boolean;
  block?: Boolean;
  disabled?: Boolean;
  size?: 'lg' | 'md' | 'sm';
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const btnPrefixCls = getPrefixCls('btn');
const ButtonBase = styled.button((props) => {
  return {
    cursor: 'pointer',
    userSelect: 'none',
    boxSizing: 'border-box',
    minWidth: 64,
    fontSize: props.theme.general?.md.fontSize,
    padding: props.theme.general?.md.padding,
    textShadow: '0 -1px 0 rgb(0 0 0 / 12%)',
    boxShadow: '0 2px #0000000b',
    lineHeight: 1.5715,
    fontWeight: 500,
    letterSpacing: '0.02857em',
    touchAction: 'manipulation',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    border: '1px solid transparent',
    borderColor: '#d9d9d9',
    borderRadius: 2,
    backgroundImage: 'none',
    backgroundColor: '#fff',
    transition: 'all .3s cubic-bezier(.645, .045, .355, 1)',
    [`&.${btnPrefixCls}-default`]: {
      [`&:not(.${btnPrefixCls}-disabled):hover`]: {
        color: props.theme[props.theme.mode || 'light']?.primary,
        borderColor: props.theme[props.theme.mode || 'light']?.primary,
      },
    },
    [`&.${btnPrefixCls}-primary`]: {
      backgroundColor: props.theme[props.theme.mode || 'light']?.primary,
      borderColor: props.theme[props.theme.mode || 'light']?.primary,
      color: '#fff',
      [`&:not(.${btnPrefixCls}-disabled):hover`]: {
        backgroundColor: alpha(props.theme[props.theme.mode || 'light']?.primary!, 0.85),
      },
    },
    [`&.${btnPrefixCls}-danger`]: {
      backgroundColor: props.theme[props.theme.mode || 'light']?.error,
      borderColor: props.theme[props.theme.mode || 'light']?.error,
      color: '#fff',
      [`&:not(.${btnPrefixCls}-disabled):hover`]: {
        backgroundColor: alpha(props.theme[props.theme.mode || 'light']?.error!, 0.85),
      },
    },
    [`&.${btnPrefixCls}-warning`]: {
      backgroundColor: props.theme[props.theme.mode || 'light']?.warning,
      borderColor: props.theme[props.theme.mode || 'light']?.warning,
      color: '#fff',
      [`&:not(.${btnPrefixCls}-disabled):hover`]: {
        backgroundColor: alpha(props.theme[props.theme.mode || 'light']?.warning!, 0.85),
      },
    },
    [`&.${btnPrefixCls}-sm`]: {
      fontSize: props.theme.general?.sm.fontSize,
      padding: props.theme.general?.sm.padding,
    },
    [`&.${btnPrefixCls}-lg`]: {
      fontSize: props.theme.general?.lg.fontSize,
      padding: props.theme.general?.lg.padding,
    },
    [`&.${btnPrefixCls}-disabled`]: {
      cursor: 'not-allowed',
      // TODO support mode
      color: '#00000040',
      borderColor: '#d9d9d9',
      backgroundColor: '#f5f5f5',
      boxShadow: 'none',
      textShadow: 'none',
    },
    [`&.${btnPrefixCls}-block`]: {
      width: '100%',
    },
    [`&:not(.${btnPrefixCls}-disabled):hover`]: {
      textDecoration: 'none',
    },
    '@media print': {
      colorAdjust: 'exact',
    },
  };
});

const Button = React.forwardRef((props: ButtonProps, ref: React.ForwardedRef<any>) => {
  const {
    disabled,
    loading,
    type = 'default',
    size = 'md',
    children,
    htmlType,
    block,
    ...rest
  } = props;

  function handleClick(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) {
    const { onClick } = props;

    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  }

  return (
    <ButtonBase
      {...rest}
      className={classNames(btnPrefixCls, `${btnPrefixCls}-${type}`, {
        [`${btnPrefixCls}-disabled`]: disabled,
        [`${btnPrefixCls}-block`]: block,
        [`${btnPrefixCls}-${size}`]: size !== 'md',
      })}
      type={htmlType}
      onClick={handleClick}
      ref={ref}
    >
      {children}
    </ButtonBase>
  );
});

export default Button;
