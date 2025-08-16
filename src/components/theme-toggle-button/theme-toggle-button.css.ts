import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const themeToggle = style({
  background: 'none',
  border: `1px solid ${theme.color.border}`,
  borderRadius: theme.borderRadius.medium,
  padding: `${theme.spacing.sm} ${theme.spacing.md}`,
  cursor: 'pointer',
  color: theme.color.text.primary,
  fontSize: theme.font.size.medium,
  fontFamily: theme.font.family.primary,
  transition: 'all 0.2s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.sm,
  whiteSpace: 'nowrap',

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
  },

  ':focus': {
    outline: 'none',
    borderColor: theme.color.primary,
    boxShadow: `0 0 0 2px ${theme.color.primary}33`,
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
