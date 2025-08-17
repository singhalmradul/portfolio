import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const aboutSection = style({
  padding: '6rem 1.5rem',
  maxWidth: '80rem',
  margin: '0 auto',
  backgroundColor: theme.color.background,
  position: 'relative',
  background: `
    ${theme.color.background},
    radial-gradient(circle at 20% 50%, ${theme.color.primary}04 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, ${theme.color.accent}03 0%, transparent 50%)
  `,
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '4px',
    background: `linear-gradient(90deg, ${theme.color.primary}, ${theme.color.accent})`,
    borderRadius: theme.borderRadius.full,
    boxShadow: `0 0 20px ${theme.color.primary}40`,
  },
  '::after': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '140px',
    height: '6px',
    background: `linear-gradient(90deg, ${theme.color.primary}20, ${theme.color.accent}20)`,
    borderRadius: theme.borderRadius.full,
    filter: 'blur(3px)',
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '4rem 1rem'
    },
    [mediaQueries.sm]: {
      padding: '5rem 1.25rem'
    },
    [mediaQueries.lgUp]: {
      padding: '8rem 1.5rem'
    }
  }
});

export const aboutTitle = style({
  fontSize: '2.5rem',
  fontWeight: theme.font.weight.bold,
  marginBottom: '2rem',
  marginTop: '1rem',
  textAlign: 'center',
  color: theme.color.text.primary,
  position: 'relative',
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '2rem',
      marginBottom: '1.5rem'
    },
    [mediaQueries.smUp]: {
      fontSize: '2.25rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '2.75rem',
      marginBottom: '2.5rem'
    }
  }
});

export const aboutText = style({
  fontSize: '1.25rem',
  lineHeight: 1.8,
  color: theme.color.text.secondary,
  textAlign: 'center',
  maxWidth: '56rem',
  margin: '0 auto',
  fontWeight: theme.font.weight.normal,
  letterSpacing: '0.025em',
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      maxWidth: '100%',
      textAlign: 'left'
    },
    [mediaQueries.smUp]: {
      textAlign: 'center'
    },
    [mediaQueries.lgUp]: {
      fontSize: '1.375rem',
      maxWidth: '60rem',
      lineHeight: 1.9,
    }
  }
});
