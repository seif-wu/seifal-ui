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
    primary: '#1976d2',
    error: '#d32f2f',
    warning: '#ed6c02',
    info: '#1976d2',
    success: '#2e7d32',
  },
  // 夜间模式
  dark: {
    primary: '#01579b',
    error: '#c62828',
    warning: '#e65100',
    info: '#01579b',
    success: '#1b5e20',
  },
};

export default defaultTheme;
