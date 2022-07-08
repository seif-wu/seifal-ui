import React from 'react';
import { Typography } from '@seifal/ui';

const TypographyPage = () => {
  return (
    <div>
      <Typography type="h1">H1 标题</Typography>
      <Typography type="h2">H2 标题</Typography>
      <Typography type="h3">H3 标题</Typography>
      <Typography type="h4">H4 标题</Typography>
      <Typography type="h5">H5 标题</Typography>
      <Typography type="h6">H6 标题</Typography>
      <Typography>默认正常文本</Typography>
      <Typography type="secondary">Secondary</Typography>
      <Typography type="code">Code</Typography>
    </div>
  );
};

export default TypographyPage;
