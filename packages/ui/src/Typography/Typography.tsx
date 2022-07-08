import React, { ElementType, ReactNode } from 'react';
import { getPrefixCls } from '@seifal/system';
import classNames from 'classnames';
import styled from '@emotion/styled';

const prefixCls = getPrefixCls('typography');

export interface TypographyProps {
  type?: 'default' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'secondary' | 'code';
  children?: ReactNode;
  className?: string;
}

const TypographyBase = styled.div<TypographyProps>((props) => {
  const mode = props.theme?.mode || 'light';
  const theme = props.theme[mode];

  return {
    color: theme?.text?.primary || 'rgba(0, 0, 0, 0.85)',
    overflowWrap: 'break-word',
    fontFamily:
      'Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, apple color emoji, segoe ui emoji, Segoe UI Symbol, noto color emoji, sans-serif',
    clear: 'both',
    ...(props.type === 'h1' && {
      [`&.${prefixCls}-h1`]: {
        marginBottom: '0.5em',
        fontWeight: 500,
        fontSize: 38,
        lineHeight: 1.23,
      },
    }),
    ...(props.type === 'h2' && {
      [`&.${prefixCls}-h2`]: {
        marginBottom: '0.5em',
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 1.35,
      },
    }),
    ...(props.type === 'h3' && {
      [`&.${prefixCls}-h3`]: {
        marginBottom: '0.5em',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 1.35,
      },
    }),
    ...(props.type === 'h4' && {
      [`&.${prefixCls}-h4`]: {
        marginBottom: '0.5em',
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 1.35,
      },
    }),
    ...(props.type === 'h5' && {
      [`&.${prefixCls}-h5`]: {
        marginBottom: '0.5em',
        fontWeight: 500,
        fontSize: 18,
        lineHeight: 1.35,
      },
    }),
    ...(props.type === 'h6' && {
      [`&.${prefixCls}-h6`]: {
        marginBottom: '0.5em',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1.35,
      },
    }),
    ...(props.type === 'secondary' && {
      [`&.${prefixCls}-secondary`]: {
        color: theme?.text?.secondary || 'rgba(0, 0, 0, 0.85)',
      },
    }),
    ...(props.type === 'code' && {
      [`&.${prefixCls}-code`]: {
        margin: '0 1px',
        padding: '0.2em 0.4em',
        fontSize: '0.9em',
        background: '#f2f4f5',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        borderRadius: 3,
      },
    }),
  };
});

const Typography = (props: TypographyProps) => {
  const { children, type = 'default', className } = props;

  const as = (type === 'default' || type === 'secondary' ? 'sapn' : type) as ElementType;

  return (
    <TypographyBase
      className={classNames(`${prefixCls}`, `${prefixCls}-${type}`, className)}
      as={as}
      type={type}
    >
      {children}
    </TypographyBase>
  );
};

export default Typography;
