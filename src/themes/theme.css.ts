import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

// Base design tokens (non-themeable)
export const tokens = createGlobalTheme(':root', {
  font: {
    family: {
      primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      secondary: 'Georgia, "Times New Roman", Times, serif',
    },
    size: {
      small: '14px',
      medium: '16px',
      large: '20px',
      xlarge: '24px',
    },
    weight: {
      normal: '400',
      medium: '500',
      bold: '700',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
});

// Theme-specific contract (only colors and theme-dependent values)
export const themeContract = createThemeContract({
  color: {
    background: null,
    surface: null,
    primary: null,
    secondary: null,
    accent: null,
    text: {
      primary: null,
      secondary: null,
      inverse: null,
    },
    border: null,
    shadow: null,
  },
});

// Light theme (only colors)
export const lightTheme = createGlobalTheme('[data-theme="light"]', themeContract, {
  color: {
    background: '#ffffff',
    surface: '#f8f9fa',
    primary: '#33ff88',
    secondary: '#6c757d',
    accent: '#17a2b8',
    text: {
      primary: '#212529',
      secondary: '#6c757d',
      inverse: '#ffffff',
    },
    border: '#dee2e6',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
});

// Dark theme (only colors)
export const darkTheme = createGlobalTheme('[data-theme="dark"]', themeContract, {
  color: {
    background: '#121212',
    surface: '#1e1e1e',
    primary: '#4dffa6',
    secondary: '#9ca3af',
    accent: '#06b6d4',
    text: {
      primary: '#ffffff',
      secondary: '#d1d5db',
      inverse: '#000000',
    },
    border: '#374151',
    shadow: 'rgba(0, 0, 0, 0.3)',
  },
});

// Combined theme object for easy access
export const theme = {
  ...tokens,
  color: themeContract.color,
};
