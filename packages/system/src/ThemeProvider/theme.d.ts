import '@emotion/react';

declare module '@emotion/react' {
  export interface ModeStyle {
    primary: string;
    error: string;
    warning: string;
    info: string;
    success: string;
  }

  interface General {
    fontSize: string | number;
    padding: string | number;
  }

  export interface LocalTheme {
    mode: 'light' | 'dark';
    general: Record<'sm' | 'md' | 'lg', General>;
    dark: ModeStyle;
    light: ModeStyle;
  }

  export interface Theme extends Partial<LocalTheme> {}
}
