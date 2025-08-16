import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const skillsSection = style({
  padding: '5rem 1.5rem',
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

export const skillsTitle = style({
  fontSize: '1.875rem',
  fontWeight: 'bold',
  marginBottom: '2.5rem',
  textAlign: 'center',
  color: theme.color.text.primary,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '1.5rem',
      marginBottom: '1.5rem'
    },
    [mediaQueries.smUp]: {
      fontSize: '1.75rem',
      marginBottom: '2rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '2rem',
      marginBottom: '3rem'
    }
  }
});

export const skillsContainer = style({
  maxWidth: '80rem',
  margin: '0 auto',
  display: 'grid',
  gap: '3rem',
  gridTemplateColumns: '1fr',
  '@media': {
    [mediaQueries.xs]: {
      gap: '2rem'
    },
    [mediaQueries.mdUp]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [mediaQueries.lgUp]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '3.5rem'
    }
  }
});

export const skillsCategory = style({
  textAlign: 'center'
});

export const skillsCategoryTitle = style({
  fontSize: '1.25rem',
  fontWeight: '600',
  marginBottom: '1.5rem',
  color: theme.color.text.primary,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '1.125rem',
      marginBottom: '1rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '1.375rem'
    }
  }
});

export const skillsGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '0.75rem',
  '@media': {
    [mediaQueries.xs]: {
      gap: '0.5rem'
    },
    [mediaQueries.smUp]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [mediaQueries.lgUp]: {
      gridTemplateColumns: '1fr',
      gap: '0.75rem'
    }
  }
});

export const skillCard = style({
  padding: '0.75rem 1rem',
  backgroundColor: theme.color.surface,
  borderRadius: '0.5rem',
  boxShadow: `0 2px 4px -1px ${theme.color.shadow}`,
  border: `1px solid ${theme.color.border}`,
  transition: 'all 0.2s',
  fontSize: '0.875rem',
  fontWeight: '500',
  color: theme.color.text.secondary,
  ':hover': {
    boxShadow: `0 4px 8px -2px ${theme.color.shadow}`,
    transform: 'translateY(-1px)',
    borderColor: theme.color.primary
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '0.6rem 0.8rem',
      fontSize: '0.8rem'
    },
    [mediaQueries.lgUp]: {
      padding: '0.875rem 1.125rem',
      fontSize: '0.9rem'
    }
  }
});
