import { style } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const themeToggle = style({
  background: `linear-gradient(135deg, ${theme.color.surfaceElevated}, ${theme.color.surface})`,
  border: `1px solid ${theme.color.borderLight}`,
  borderRadius: theme.borderRadius.large,
  padding: `${theme.spacing.sm} ${theme.spacing.md}`,
  cursor: 'pointer',
  color: theme.color.text.primary,
  fontSize: theme.font.size.medium,
  fontFamily: theme.font.family.primary,
  transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing.sm,
  whiteSpace: 'nowrap',
  position: 'relative',
  overflow: 'hidden',
  backdropFilter: 'blur(10px)',
  boxShadow: `0 2px 8px ${theme.color.shadow}, 0 1px 3px ${theme.color.shadow}`,

  '@media': {
    [mediaQueries.xs]: {
      // Minimal mobile styling for very small screens
      background: 'none',
      border: 'none',
      borderRadius: '50%',
      padding: '0.5rem',
      fontSize: '1.25rem',
      gap: 0,
      minWidth: '2.5rem',
      height: '2.5rem',
      width: '2.5rem',
      boxShadow: 'none',
      backdropFilter: 'none',
    },
    [mediaQueries.sm]: {
      // Clean mobile styling for larger mobile devices
      background: 'none',
      border: `1px solid ${theme.color.borderLight}`,
      borderRadius: theme.borderRadius.medium,
      padding: '0.5rem',
      fontSize: '1.125rem',
      gap: 0,
      minWidth: '2.75rem',
      height: '2.75rem',
      width: '2.75rem',
      boxShadow: 'none',
      backdropFilter: 'none',
    },
  },

  ':hover': {
    backgroundColor: theme.color.surface,
    borderColor: theme.color.primary,
    color: theme.color.primary,
    boxShadow: `0 8px 25px ${theme.color.shadow}, 0 4px 12px ${theme.color.shadow}, 0 0 0 1px ${theme.color.primary}30`,
    transform: 'translateY(-2px) scale(1.02)',
  },

  ':focus': {
    outline: 'none',
    borderColor: theme.color.primary,
    boxShadow: `0 0 0 3px ${theme.color.primary}30, 0 8px 25px ${theme.color.shadow}`,
  },

  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, transparent, ${theme.color.primary}10, transparent)`,
    transition: 'left 0.5s ease',
  },
});

// Mobile-specific hover styles
globalStyle(`${themeToggle}:hover`, {
  '@media': {
    [mediaQueries.xs]: {
      backgroundColor: `${theme.color.primary}10 !important`,
      borderColor: 'transparent !important',
      boxShadow: 'none !important',
      transform: 'scale(1.05) !important',
    },
    [mediaQueries.sm]: {
      backgroundColor: `${theme.color.primary}10 !important`,
      borderColor: `${theme.color.primary} !important`,
      boxShadow: 'none !important',
      transform: 'scale(1.05) !important',
    },
  },
});

globalStyle(`${themeToggle}:focus`, {
  '@media': {
    [mediaQueries.xs]: {
      borderColor: `${theme.color.primary} !important`,
      boxShadow: `0 0 0 2px ${theme.color.primary}30 !important`,
    },
    [mediaQueries.sm]: {
      borderColor: `${theme.color.primary} !important`,
      boxShadow: `0 0 0 2px ${theme.color.primary}30 !important`,
    },
  },
});

globalStyle(`${themeToggle}::before`, {
  '@media': {
    [mediaQueries.sm]: {
      display: 'none !important',
    },
  },
});

export const themeIcon = style({
  fontSize: '18px',
  lineHeight: 1,

  '@media': {
    [mediaQueries.xs]: {
      fontSize: '14px',
    },
    [mediaQueries.sm]: {
      fontSize: '16px',
    },
  },
});

export const themeText = style({
  '@media': {
    [mediaQueries.sm]: {
      display: 'none', // Hide text on mobile and tablet
    },
  },
});

// Global styles for hover effects
globalStyle(`${themeToggle}:hover::before`, {
  left: '100%',
});
