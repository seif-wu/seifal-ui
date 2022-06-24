import React, { ButtonHTMLAttributes } from 'react';
import { Theme } from '@emotion/react';
import ThemeProvider from '@/system/ThemeProvider';
import Button from './components/Button';

const theme: Theme = {};

const App = () => {
  function test(e: React.MouseEvent) {
    console.log(e)
  }
  return (
    <ThemeProvider theme={theme}>
      <div style={{ float: 'left' }}>
        <Button type="primary" size="sm" disabled onClick={test}>Sm</Button>
        <Button type="primary"  onClick={test}>md</Button>
        <Button type="primary" size="lg">lg</Button>
      </div>
      <div>
       <Button>Default</Button>
       <Button type="primary" block>Primary</Button>
       <Button type="warning">Warning</Button>
       <Button type="danger">Danger</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
