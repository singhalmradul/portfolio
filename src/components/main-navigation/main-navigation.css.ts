import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const portfolioNav = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: `${theme.color.background}95`,
  backdropFilter: 'blur(10px)',
  borderBottom: `1px solid ${theme.color.border}`,
  zIndex: 1000,
  padding: '1rem 0',
  '@media': {
    [mediaQueries.xs]: {
      padding: '0.75rem 0'
    }
  }
});

export const navContainer = style({
  maxWidth: '80rem',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1.5rem',
  '@media': {
    [mediaQueries.xs]: {
      padding: '0 1rem'
    },
    [mediaQueries.sm]: {
      flexDirection: 'column',
      gap: '0.75rem'
    }
  }
});

export const navLinks = style({
  display: 'flex',
  gap: '2rem',
  '@media': {
    [mediaQueries.xs]: {
      gap: '0.75rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    [mediaQueries.sm]: {
      gap: '1rem',
      justifyContent: 'center'
    }
  }
});

export const navLink = style({
  color: theme.color.text.secondary,
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.2s',
  whiteSpace: 'nowrap',
  ':hover': {
    color: theme.color.primary
  },
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.8rem'
    },
    [mediaQueries.sm]: {
      fontSize: '0.875rem'
    }
  }
});

export const themeToggleContainer = style({
  display: 'flex',
  alignItems: 'center'
});
