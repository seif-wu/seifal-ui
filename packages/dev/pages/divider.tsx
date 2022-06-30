import React from 'react';
import { Divider } from '@seifal/ui';

const DividerPage = () => {
  return (
    <>
      <span>这是一段文字，下面会有个分割线</span>
      <Divider />
      <span>这是一段文字，上面那个是分割线</span>
      <Divider>Center</Divider>
      <span>这是一段文字，上面那个是分割线</span>
      <Divider textAlign="left">Left</Divider>
      <span>这是一段文字，上面那个是分割线</span>
      <Divider textAlign="right">Right</Divider>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>
          垂直的分割线
          <br />
          垂直的分割线
        </span>
        <Divider type="vertical">Or</Divider>
        <span>垂直的分割线</span>
        <Divider type="vertical" />
        <span>垂直的分割线</span>
      </div>
    </>
  );
};

export default DividerPage;
