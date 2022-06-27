import React from 'react';
import _ from 'lodash';
import { ThemeContext, ThemeProviderProps } from '@emotion/react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import defaultTheme from '../theme/defaultTheme';

const ThemeProvider = (props: ThemeProviderProps): React.ReactElement => {
  const { theme: outerTheme, children } = props;

  let contextTheme = React.useContext(ThemeContext);
  const theme = _.defaultsDeep(outerTheme, contextTheme, defaultTheme);

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
