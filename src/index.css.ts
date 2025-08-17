import { globalStyle } from '@vanilla-extract/css';
import { theme } from './themes/theme.css';
import { mediaQueries } from './themes/media';
import './themes/animations.css';
import './themes/utilities.css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html', {
  colorScheme: 'light dark',
  scrollBehavior: 'smooth',
  scrollPaddingTop: '5rem', // Account for fixed navigation height
  fontSize: '16px',
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '14px',
      scrollPaddingTop: '4.5rem' // Smaller padding for mobile
    },
    [mediaQueries.lgUp]: {
      fontSize: '18px'
    }
  }
});

globalStyle('body', {
  fontFamily: theme.font.family.primary,
  fontSize: theme.font.size.medium,
  lineHeight: 1.6,
  color: theme.color.text.primary,
  backgroundColor: theme.color.background,
  minHeight: '100vh',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  overflowX: 'hidden',
  transition: 'background-color 0.3s ease, color 0.3s ease',
});

globalStyle('#root', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

// Improve link accessibility and touch targets
globalStyle('a', {
  color: theme.color.primary,
  textDecoration: 'none',
  minHeight: '44px',
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'color 0.2s ease',
});

// Only apply underline to text links, not card-style links or buttons
globalStyle('a:hover:not([data-no-underline]):not([class*="Button"]):not([class*="button"]):not([class*="Card"]):not([class*="card"])', {
  textDecoration: 'underline',
});

// Ensure card-style links never get underlined
globalStyle('a[data-no-underline], a[data-no-underline]:hover', {
  textDecoration: 'none !important',
});

globalStyle('a:focus-visible', {
  outline: `2px solid ${theme.color.primary}`,
  outlineOffset: '2px',
});

// Improve button accessibility and touch targets
globalStyle('button', {
  minHeight: '44px',
  minWidth: '44px',
});

globalStyle('button:focus-visible', {
  outline: `2px solid ${theme.color.primary}`,
  outlineOffset: '2px',
});

// Improve image responsiveness
globalStyle('img', {
  maxWidth: '100%',
  height: 'auto',
});

// Ensure headings are properly sized on mobile
globalStyle('h1, h2, h3, h4, h5, h6', {
  lineHeight: 1.2,
  wordWrap: 'break-word',
});

// Add scroll margin for anchor links (accounting for fixed nav)
globalStyle('section[id]', {
  scrollMarginTop: '5rem',
  '@media': {
    [mediaQueries.sm]: {
      scrollMarginTop: '7rem',
    }
  }
});
