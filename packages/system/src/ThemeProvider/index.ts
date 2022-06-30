import { useTheme, withTheme } from '@emotion/react';
import ThemeProvider from './ThemeProvider';

export default ThemeProvider;
export { useTheme, withTheme };

import '@emotion/react';

export interface ModeStyle {
  text: {
    primary?: string;
    secondary?: string;
    disabled?: string;
  },
  primary: string;
  error: string;
  warning: string;
  info: string;
  success: string;
  background: string;
  divider: string;
}

interface General {
  fontSize: string | number;
  padding: string | number;
}

export interface LocalTheme {
  mode: 'light' | 'dark';
  general: Record<'sm' | 'md' | 'lg', General>;
  dark: Partial<ModeStyle>;
  light: Partial<ModeStyle>;
}

declare module '@emotion/react' {
  export interface Theme extends Partial<LocalTheme> {}
}
