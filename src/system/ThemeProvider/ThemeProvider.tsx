import React from 'react';
import _ from 'lodash';
import { Theme } from '@emotion/react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import defaultTheme from '../theme/defaultTheme';

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme: Theme;
}

function ThemeProvider(props: ThemeProviderProps) {
  const { theme: outerTheme, children } = props;

  const theme = _.defaultsDeep(outerTheme, defaultTheme);

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
}

export default ThemeProvider;
