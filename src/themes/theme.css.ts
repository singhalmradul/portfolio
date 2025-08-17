import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

// Base design tokens (non-themeable)
export const tokens = createGlobalTheme(':root', {
  font: {
    family: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      secondary: '"Playfair Display", Georgia, "Times New Roman", Times, serif',
      mono: '"JetBrains Mono", "Fira Code", "Monaco", "Courier New", monospace',
    },
    size: {
      xs: '12px',
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '24px',
      xxlarge: '32px',
    },
    weight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
  },
  borderRadius: {
    small: '6px',
    medium: '12px',
    large: '16px',
    xlarge: '24px',
    full: '9999px',
  },
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    glow: '0 0 20px rgba(22, 163, 74, 0.3)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  gradient: {
    primary: 'linear-gradient(135deg, #16a34a 0%, #059669 50%, #10b981 100%)',
    secondary: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #6366f1 100%)',
    accent: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #ec4899 100%)',
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    darkGlass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
  },
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '750ms',
    },
    easing: {
      easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
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
    surfaceElevated: null,
    primary: null,
    primaryHover: null,
    secondary: null,
    secondaryHover: null,
    accent: null,
    accentHover: null,
    text: {
      primary: null,
      secondary: null,
      tertiary: null,
      inverse: null,
      muted: null,
    },
    border: null,
    borderLight: null,
    shadow: null,
    glass: null,
    success: null,
    warning: null,
    error: null,
    info: null,
  },
});

// Light theme (only colors)
export const lightTheme = createGlobalTheme('[data-theme="light"]', themeContract, {
  color: {
    background: '#fefffe',
    surface: '#f0fdf4',
    surfaceElevated: '#ffffff',
    primary: '#16a34a',
    primaryHover: '#15803d',
    secondary: '#059669',
    secondaryHover: '#047857',
    accent: '#10b981',
    accentHover: '#059669',
    text: {
      primary: '#0f172a',
      secondary: '#374151',
      tertiary: '#6b7280',
      inverse: '#ffffff',
      muted: '#9ca3af',
    },
    border: '#d1fae5',
    borderLight: '#ecfdf5',
    shadow: 'rgba(34, 197, 94, 0.15)',
    glass: 'rgba(255, 255, 255, 0.25)',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
});

// Dark theme (only colors)
export const darkTheme = createGlobalTheme('[data-theme="dark"]', themeContract, {
  color: {
    background: '#0d1117',
    surface: '#1a2332',
    surfaceElevated: '#21262d',
    primary: '#16a34a',
    primaryHover: '#22c55e',
    secondary: '#15803d',
    secondaryHover: '#16a34a',
    accent: '#166534',
    accentHover: '#15803d',
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      tertiary: '#94a3b8',
      inverse: '#0d1117',
      muted: '#64748b',
    },
    border: '#1f2937',
    borderLight: '#374151',
    shadow: 'rgba(22, 163, 74, 0.25)',
    glass: 'rgba(255, 255, 255, 0.05)',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
});

// Combined theme object for easy access
export const theme = {
  ...tokens,
  color: themeContract.color,
};
