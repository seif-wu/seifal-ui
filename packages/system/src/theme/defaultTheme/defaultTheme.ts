const defaultTheme = {
  // 默认白天模式
  mode: 'light',
  general: {
    sm: {
      fontSize: '0.8125rem',
      padding: '0px 8px',
    },
    md: {
      fontSize: '0.875rem',
      padding: '4px 16px',
    },
    lg: {
      fontSize: '0.9375rem',
      padding: '6px 20px',
    },
  },
  // 白天模式
  light: {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.08)',
    },
    primary: '#1976d2',
    error: '#d32f2f',
    warning: '#ed6c02',
    info: '#1976d2',
    success: '#2e7d32',
    background: '#fff',
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  // 夜间模式
  dark: {
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    primary: '#01579b',
    error: '#c62828',
    warning: '#e65100',
    info: '#01579b',
    success: '#1b5e20',
    background: '#121212',
    divider: 'rgba(255, 255, 255, 0.12)',
  },
};

export default defaultTheme;
