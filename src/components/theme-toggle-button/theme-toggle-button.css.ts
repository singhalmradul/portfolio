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
  gap: theme.spacing.sm,
  whiteSpace: 'nowrap',
  position: 'relative',
  overflow: 'hidden',
  backdropFilter: 'blur(10px)',
  boxShadow: `0 2px 8px ${theme.color.shadow}, 0 1px 3px ${theme.color.shadow}`,

  '@media': {
    [mediaQueries.xs]: {
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      fontSize: theme.font.size.small,
      gap: theme.spacing.xs,
      minWidth: 'auto',
    },
    [mediaQueries.sm]: {
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      fontSize: theme.font.size.small,
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
    [mediaQueries.xs]: {
      display: 'none', // Hide text on very small screens
    },
  },
});

// Global styles for hover effects
globalStyle(`${themeToggle}:hover::before`, {
  left: '100%',
});
