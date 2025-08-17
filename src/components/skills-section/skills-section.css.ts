import { style } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const skillsSection = style({
  padding: '5rem 1.5rem',
  backgroundColor: theme.color.background,
  position: 'relative',
  background: `
    ${theme.color.background},
    radial-gradient(circle at 10% 20%, ${theme.color.accent}04 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, ${theme.color.primary}06 0%, transparent 50%),
    linear-gradient(135deg, ${theme.color.surface}20 0%, transparent 100%)
  `,
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${theme.color.borderLight}, transparent)`,
  },
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
  padding: '1rem 1.25rem',
  backgroundColor: theme.color.surfaceElevated,
  borderRadius: theme.borderRadius.medium,
  boxShadow: `${theme.shadow.sm}, 0 1px 3px ${theme.color.shadow}`,
  border: `1px solid ${theme.color.borderLight}`,
  transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
  fontSize: '0.9rem',
  fontWeight: theme.font.weight.medium,
  color: theme.color.text.secondary,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  backdropFilter: 'blur(5px)',
  ':hover': {
    boxShadow: `${theme.shadow.lg}, 0 0 25px ${theme.color.primary}20, 0 8px 25px ${theme.color.shadow}`,
    transform: 'translateY(-6px) scale(1.03)',
    borderColor: theme.color.primary,
    color: theme.color.primary,
    backgroundColor: theme.color.background,
  },
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '3px',
    background: `linear-gradient(90deg, ${theme.color.primary}, ${theme.color.secondary}, ${theme.color.accent})`,
    transition: `left ${theme.animation.duration.slower} ${theme.animation.easing.easeOut}`,
  },
  '::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '0',
    height: '0',
    background: `radial-gradient(circle, ${theme.color.primary}08 0%, ${theme.color.accent}05 50%, transparent 70%)`,
    borderRadius: '50%',
    transition: `all ${theme.animation.duration.slow} ${theme.animation.easing.easeOut}`,
    pointerEvents: 'none',
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '0.75rem 1rem',
      fontSize: '0.85rem'
    },
    [mediaQueries.lgUp]: {
      padding: '1.125rem 1.5rem',
      fontSize: '0.95rem'
    }
  }
});

// Global styles for hover effects on pseudo-elements
globalStyle(`${skillCard}:hover::before`, {
  left: 0,
});

globalStyle(`${skillCard}:hover::after`, {
  width: '300%',
  height: '300%',
});
