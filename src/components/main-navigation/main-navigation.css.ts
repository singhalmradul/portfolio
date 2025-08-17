import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const portfolioNav = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: `${theme.color.background}90`,
  backdropFilter: 'blur(25px) saturate(180%)',
  borderBottom: `1px solid ${theme.color.borderLight}`,
  zIndex: 1000,
  padding: '1rem 0',
  transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
  boxShadow: `0 4px 6px -1px ${theme.color.shadow}, 0 2px 4px -1px rgba(0, 0, 0, 0.04)`,
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      linear-gradient(90deg, transparent 0%, ${theme.color.primary}06 25%, ${theme.color.accent}04 75%, transparent 100%),
      linear-gradient(180deg, ${theme.color.glass} 0%, transparent 100%)
    `,
    pointerEvents: 'none',
  },
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '50%',
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${theme.color.primary}40, transparent)`,
    filter: 'blur(0.5px)',
  },
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

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  '@media': {
    [mediaQueries.sm]: {
      order: -1
    }
  }
});

export const logo = style({
  height: '2rem',
  width: '2rem',
  transition: `transform ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
  ':hover': {
    transform: 'scale(1.1)',
  },
  '@media': {
    [mediaQueries.xs]: {
      height: '1.75rem',
      width: '1.75rem'
    }
  }
});
