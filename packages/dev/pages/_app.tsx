import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@seifal/system';
import { Theme } from '@emotion/react';

const theme: Theme = {
  mode: 'light',
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
