import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const aboutSection = style({
  padding: '5rem 1.5rem',
  maxWidth: '80rem',
  margin: '0 auto',
  backgroundColor: theme.color.background,
  '@media': {
    [mediaQueries.xs]: {
      padding: '3rem 1rem'
    },
    [mediaQueries.sm]: {
      padding: '4rem 1.25rem'
    },
    [mediaQueries.lgUp]: {
      padding: '6rem 1.5rem'
    }
  }
});

export const aboutTitle = style({
  fontSize: '1.875rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  textAlign: 'center',
  color: theme.color.text.primary,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '1.5rem',
      marginBottom: '1rem'
    },
    [mediaQueries.smUp]: {
      fontSize: '1.75rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '2rem',
      marginBottom: '2rem'
    }
  }
});

export const aboutText = style({
  fontSize: '1.125rem',
  lineHeight: 1.75,
  color: theme.color.text.secondary,
  textAlign: 'center',
  maxWidth: '48rem',
  margin: '0 auto',
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '1rem',
      lineHeight: 1.6,
      maxWidth: '100%',
      textAlign: 'left'
    },
    [mediaQueries.smUp]: {
      textAlign: 'center'
    },
    [mediaQueries.lgUp]: {
      fontSize: '1.2rem',
      maxWidth: '52rem'
    }
  }
});
