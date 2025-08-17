import { globalStyle } from '@vanilla-extract/css';
import { theme } from './theme.css';

// Smooth scrolling enhancement
globalStyle('html', {
  scrollBehavior: 'smooth',
});

// Enhanced focus styles for better accessibility
globalStyle(':focus-visible', {
  outline: `2px solid ${theme.color.primary}`,
  outlineOffset: '2px',
  borderRadius: theme.borderRadius.small,
});

// Selection styles
globalStyle('::selection', {
  backgroundColor: theme.color.primary,
  color: theme.color.text.inverse,
});

globalStyle('::-moz-selection', {
  backgroundColor: theme.color.primary,
  color: theme.color.text.inverse,
});

// Scrollbar styling
globalStyle('::-webkit-scrollbar', {
  width: '8px',
});

globalStyle('::-webkit-scrollbar-track', {
  background: theme.color.surface,
  borderRadius: theme.borderRadius.small,
});

globalStyle('::-webkit-scrollbar-thumb', {
  background: `linear-gradient(135deg, ${theme.color.primary}, ${theme.color.accent})`,
  borderRadius: theme.borderRadius.small,
  border: `1px solid ${theme.color.borderLight}`,
});

globalStyle('::-webkit-scrollbar-thumb:hover', {
  background: `linear-gradient(135deg, ${theme.color.primaryHover}, ${theme.color.accentHover})`,
});

// Improved image loading
globalStyle('img', {
  transition: `opacity ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
});

// Enhanced button styles
globalStyle('button', {
  fontFamily: 'inherit',
  cursor: 'pointer',
});

globalStyle('button:disabled', {
  cursor: 'not-allowed',
  opacity: 0.6,
});

// Link hover effects
globalStyle('a', {
  transition: `all ${theme.animation.duration.fast} ${theme.animation.easing.easeOut}`,
});

// Enhanced form elements
globalStyle('input, textarea, select', {
  fontFamily: 'inherit',
  transition: `all ${theme.animation.duration.fast} ${theme.animation.easing.easeOut}`,
});

globalStyle('input:focus, textarea:focus, select:focus', {
  outline: 'none',
  borderColor: theme.color.primary,
  boxShadow: `0 0 0 3px ${theme.color.primary}20`,
});
