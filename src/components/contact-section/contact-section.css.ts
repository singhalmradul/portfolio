import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const contactSection = style({
  padding: '5rem 1.5rem',
  textAlign: 'center',
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

export const contactTitle = style({
  fontSize: '1.875rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
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

export const contactDescription = style({
  marginBottom: '1.5rem',
  color: theme.color.text.secondary,
  maxWidth: '32rem',
  margin: '0 auto 1.5rem auto',
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.95rem',
      marginBottom: '1.25rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '1.1rem',
      marginBottom: '2rem',
      maxWidth: '40rem'
    }
  }
});

export const contactButtons = style({
  display: 'flex',
  gap: '1.5rem',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '@media': {
    [mediaQueries.xs]: {
      gap: '1rem',
      flexDirection: 'column',
      alignItems: 'center'
    },
    [mediaQueries.smUp]: {
      flexDirection: 'row'
    }
  }
});

export const contactButton = style({
  padding: '0.75rem 1.25rem',
  backgroundColor: theme.color.primary,
  color: theme.color.text.inverse,
  borderRadius: '1rem',
  boxShadow: `0 4px 6px -1px ${theme.color.shadow}`,
  textDecoration: 'none',
  transition: 'all 0.2s',
  minWidth: 'fit-content',
  display: 'inline-block',
  ':hover': {
    boxShadow: `0 10px 15px -3px ${theme.color.shadow}`,
    transform: 'translateY(-2px)'
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '0.875rem 1.5rem',
      width: '80%',
      maxWidth: '16rem'
    },
    [mediaQueries.smUp]: {
      width: 'auto'
    },
    [mediaQueries.lgUp]: {
      padding: '1rem 1.75rem',
      fontSize: '1.05rem'
    }
  }
});

export const contactButtonSecondary = style({
  padding: '0.75rem 1.25rem',
  border: `1px solid ${theme.color.primary}`,
  color: theme.color.primary,
  backgroundColor: 'transparent',
  borderRadius: '1rem',
  textDecoration: 'none',
  transition: 'all 0.2s',
  minWidth: 'fit-content',
  display: 'inline-block',
  ':hover': {
    backgroundColor: theme.color.primary,
    color: theme.color.text.inverse,
    transform: 'translateY(-2px)'
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '0.875rem 1.5rem',
      width: '80%',
      maxWidth: '16rem'
    },
    [mediaQueries.smUp]: {
      width: 'auto'
    },
    [mediaQueries.lgUp]: {
      padding: '1rem 1.75rem',
      fontSize: '1.05rem'
    }
  }
});
