import * as React from 'react';
import { ReactNode } from 'react';
import { getPrefixCls } from '@seifal/system';
import styled from '@emotion/styled';
import classNames from 'classnames';

export interface DividerProps {
  // 分割线内显示的内容
  children?: ReactNode;
  // 是否是虚线
  dashed?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  type?: 'horizontal' | 'vertical';
}

const prefixCls = getPrefixCls('divider');
const DividerBase = styled.div<DividerProps>((props) => {
  const mode = props.theme.mode || 'light';
  const theme = props.theme[mode];
  const color = theme?.text?.primary || '#fff';
  const borderColor = theme?.divider || 'rgba(0, 0, 0, .06)';

  return {
    color,
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    fontSize: 14,
    fontVariant: 'tabular-nums',
    lineHeight: 1.5715,
    listStyle: 'none',
    fontFeatureSettings: 'tnum',
    borderTop: `1px solid ${borderColor}`,
    [`&.${prefixCls}-vertical`]: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: '0',
      borderWidth: '0',
      borderStyle: 'solid',
      borderColor: borderColor,
      borderBottomWidth: '0',
      borderRightWidth: 'thin',
      alignSelf: 'stretch',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      margin: '0 16px',
      [`&.${prefixCls}-with-text`]: {
        margin: '0 8px',
        border: 0,
        [`&.${prefixCls}-with-text:before`]: {
          height: '100%',
          top: '0%',
          left: '50%',
          borderTop: '0',
          borderLeft: `thin solid ${borderColor}`,
          transform: 'translateX(0%)',
          position: 'relative',
          width: '100%',
          content: '""',
        },
        [`&.${prefixCls}-with-text:after`]: {
          height: '100%',
          top: '0%',
          left: '50%',
          borderTop: '0',
          borderLeft: `thin solid ${borderColor}`,
          transform: 'translateX(0%)',
          position: 'relative',
          width: '100%',
          content: '""',
        },
      },
    },
    [`&.${prefixCls}-horizontal`]: {
      display: 'flex',
      clear: 'both',
      width: '100%',
      minWidth: '100%',
      margin: '24px 0',
      [`&.${prefixCls}-with-text`]: {
        borderTop: 0,
      },
      [`&.${prefixCls}-with-text:before`]: {
        position: 'relative',
        top: '50%',
        width: '50%',
        borderTop: '1px solid transparent',
        borderTopColor: borderColor,
        borderBottom: '0',
        transform: 'translateY(50%)',
        content: '" "',
      },
      [`&.${prefixCls}-with-text:after`]: {
        position: 'relative',
        top: '50%',
        width: '50%',
        borderTop: '1px solid transparent',
        borderTopColor: borderColor,
        borderBottom: '0',
        transform: 'translateY(50%)',
        content: '" "',
      },
      [`&.${prefixCls}-with-text.${prefixCls}-text-left:before`]: {
        width: '10%',
      },
      [`&.${prefixCls}-with-text.${prefixCls}-text-left:after`]: {
        width: '90%',
      },
      [`&.${prefixCls}-with-text.${prefixCls}-text-right:before`]: {
        width: '90%',
      },
      [`&.${prefixCls}-with-text.${prefixCls}-text-right:after`]: {
        width: '10%',
      },
    },
  };
});

const Divider = (props: DividerProps) => {
  const { type = 'horizontal', textAlign = 'center', children } = props;

  return (
    <DividerBase
      className={classNames({
        [`${prefixCls}-horizontal`]: type === 'horizontal',
        [`${prefixCls}-vertical`]: type === 'vertical',
        [`${prefixCls}-with-text`]: !!children,
        [`${prefixCls}-text-${textAlign}`]: !!textAlign,
      })}
    >
      {!!children && <div style={{ padding: '0 1rem' }}>{children}</div>}
    </DividerBase>
  );
};

export default Divider;
