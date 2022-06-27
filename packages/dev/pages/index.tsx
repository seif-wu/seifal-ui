import type { NextPage } from 'next';
import { Button } from '@seifal/ui';
import { ThemeProvider } from '@seifal/system';

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={{}}>
      <Button type="primary" block>哈哈哈哈</Button>
    </ThemeProvider>
  );
};

export default Home;
