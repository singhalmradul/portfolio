import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const heroSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '3rem 1rem 5rem 1rem',
  background: `linear-gradient(to right, ${theme.color.primary}, ${theme.color.accent})`,
  color: theme.color.text.inverse,
  minHeight: '70vh',
  '@media': {
    [mediaQueries.xs]: {
      padding: '2rem 0.75rem 3rem 0.75rem',
      minHeight: '60vh'
    },
    [mediaQueries.sm]: {
      padding: '2.5rem 1rem 4rem 1rem',
      minHeight: '65vh'
    },
    [mediaQueries.lgUp]: {
      padding: '4rem 1rem 6rem 1rem',
      minHeight: '75vh'
    }
  }
});

export const heroTitle = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  lineHeight: 1.2,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '1.75rem'
    },
    [mediaQueries.smUp]: {
      fontSize: '2.5rem'
    },
    [mediaQueries.mdUp]: {
      fontSize: '3rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '3.5rem'
    },
    [mediaQueries.xlUp]: {
      fontSize: '3.75rem'
    }
  }
});

export const heroDescription = style({
  fontSize: '1rem',
  marginBottom: '1.5rem',
  maxWidth: '32rem',
  lineHeight: 1.6,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.95rem',
      maxWidth: '90%'
    },
    [mediaQueries.smUp]: {
      fontSize: '1.125rem'
    },
    [mediaQueries.mdUp]: {
      fontSize: '1.25rem',
      marginBottom: '2rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '1.375rem',
      maxWidth: '36rem'
    },
    [mediaQueries.xlUp]: {
      fontSize: '1.5rem',
      maxWidth: '40rem'
    }
  }
});

export const heroButtons = style({
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '@media': {
    [mediaQueries.xs]: {
      gap: '0.75rem',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    },
    [mediaQueries.smUp]: {
      flexDirection: 'row'
    }
  }
});

export const heroButton = style({
  padding: '0.75rem 1.5rem',
  backgroundColor: theme.color.background,
  color: theme.color.primary,
  borderRadius: '1rem',
  boxShadow: `0 4px 6px -1px ${theme.color.shadow}`,
  fontWeight: '500',
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'all 0.2s',
  minWidth: 'fit-content',
  ':hover': {
    boxShadow: `0 10px 15px -3px ${theme.color.shadow}`,
    transform: 'translateY(-2px)'
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '0.875rem 2rem',
      fontSize: '0.95rem',
      width: '90%',
      maxWidth: '16rem'
    },
    [mediaQueries.smUp]: {
      width: 'auto'
    },
    [mediaQueries.lgUp]: {
      padding: '1rem 2rem',
      fontSize: '1.1rem'
    }
  }
});

export const heroButtonSecondary = style({
  padding: '0.75rem 1.5rem',
  border: `2px solid ${theme.color.text.inverse}`,
  borderRadius: '1rem',
  fontWeight: '500',
  textDecoration: 'none',
  color: theme.color.text.inverse,
  backgroundColor: 'transparent',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'all 0.2s',
  minWidth: 'fit-content',
  display: 'inline-block',
  textAlign: 'center',
  ':hover': {
    backgroundColor: theme.color.background,
    color: theme.color.primary,
    transform: 'translateY(-2px)'
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '0.875rem 2rem',
      fontSize: '0.95rem',
      width: '90%',
      maxWidth: '16rem'
    },
    [mediaQueries.smUp]: {
      width: 'auto'
    },
    [mediaQueries.lgUp]: {
      padding: '1rem 2rem',
      fontSize: '1.1rem'
    }
  }
});
