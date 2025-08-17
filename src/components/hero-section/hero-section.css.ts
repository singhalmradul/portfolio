import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const heroSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '4rem 1rem 6rem 1rem',
  background: `linear-gradient(135deg, ${theme.color.primary} 0%, ${theme.color.secondary} 30%, ${theme.color.accent} 70%, ${theme.color.primaryHover} 100%)`,
  color: theme.color.text.inverse,
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 50% 10%, rgba(22, 163, 74, 0.1) 0%, transparent 70%),
      radial-gradient(circle at 10% 80%, rgba(21, 128, 61, 0.12) 0%, transparent 70%),
      radial-gradient(circle at 90% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)
    `,
    pointerEvents: 'none',
  },
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.05) 30%, transparent 70%),
      linear-gradient(-45deg, transparent 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%)
    `,
    pointerEvents: 'none',
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '3rem 1rem 4rem 1rem',
      minHeight: '80vh'
    },
    [mediaQueries.sm]: {
      padding: '3.5rem 1rem 5rem 1rem',
      minHeight: '85vh'
    },
    [mediaQueries.lgUp]: {
      padding: '5rem 1rem 7rem 1rem',
      minHeight: '100vh'
    }
  }
});

export const heroTitle = style({
  fontSize: '2.5rem',
  fontWeight: theme.font.weight.extrabold,
  marginBottom: '1.5rem',
  lineHeight: 1.2,
  position: 'relative',
  zIndex: 1,
  color: theme.color.text.inverse,
  letterSpacing: '-0.02em',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '2rem'
    },
    [mediaQueries.smUp]: {
      fontSize: '3rem'
    },
    [mediaQueries.mdUp]: {
      fontSize: '3.5rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '4rem'
    },
    [mediaQueries.xlUp]: {
      fontSize: '4.5rem'
    }
  }
});

export const heroDescription = style({
  fontSize: '1.125rem',
  marginBottom: '2.5rem',
  maxWidth: '42rem',
  lineHeight: 1.7,
  position: 'relative',
  zIndex: 1,
  opacity: 0.95,
  fontWeight: theme.font.weight.medium,
  color: theme.color.text.inverse,
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  padding: '0 1rem',
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '1rem',
      maxWidth: '90%',
      marginBottom: '2rem'
    },
    [mediaQueries.smUp]: {
      fontSize: '1.25rem'
    },
    [mediaQueries.mdUp]: {
      fontSize: '1.375rem',
      marginBottom: '3rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '1.5rem',
      maxWidth: '48rem'
    },
    [mediaQueries.xlUp]: {
      fontSize: '1.625rem',
      maxWidth: '52rem'
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
  padding: '1rem 2rem',
  backgroundColor: theme.color.surfaceElevated,
  color: theme.color.primary,
  borderRadius: theme.borderRadius.large,
  boxShadow: theme.shadow.lg,
  fontWeight: theme.font.weight.bold,
  textDecoration: 'none',
  border: `2px solid rgba(255, 255, 255, 0.3)`,
  cursor: 'pointer',
  fontSize: '1.125rem',
  transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
  minWidth: 'fit-content',
  position: 'relative',
  zIndex: 1,
  backdropFilter: 'blur(15px)',
  overflow: 'hidden',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)`,
    transition: `left ${theme.animation.duration.slower} ${theme.animation.easing.easeOut}`,
  },
  ':hover': {
    boxShadow: `${theme.shadow.xl}, 0 0 20px ${theme.color.primary}40`,
    transform: 'translateY(-6px) scale(1.05)',
    backgroundColor: theme.color.background,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  ':active': {
    transform: 'translateY(-3px) scale(1.02)',
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '0.875rem 1.75rem',
      fontSize: '1rem',
      width: '90%',
      maxWidth: '18rem'
    },
    [mediaQueries.smUp]: {
      width: 'auto'
    },
    [mediaQueries.lgUp]: {
      padding: '1.125rem 2.5rem',
      fontSize: '1.25rem'
    }
  }
});

export const heroButtonSecondary = style({
  padding: '1rem 2rem',
  border: `2px solid rgba(255, 255, 255, 0.4)`,
  borderRadius: theme.borderRadius.large,
  fontWeight: theme.font.weight.bold,
  textDecoration: 'none',
  color: theme.color.text.inverse,
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  fontSize: '1.125rem',
  cursor: 'pointer',
  transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
  minWidth: 'fit-content',
  display: 'inline-block',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  backdropFilter: 'blur(15px)',
  overflow: 'hidden',
  '::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '0',
    height: '0',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    transition: `all ${theme.animation.duration.slower} ${theme.animation.easing.easeOut}`,
  },
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    color: theme.color.primary,
    transform: 'translateY(-6px) scale(1.05)',
    borderColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: `0 15px 35px rgba(0, 0, 0, 0.2)`,
  },
  ':active': {
    transform: 'translateY(-3px) scale(1.02)',
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '0.875rem 1.75rem',
      fontSize: '1rem',
      width: '90%',
      maxWidth: '18rem'
    },
    [mediaQueries.smUp]: {
      width: 'auto'
    },
    [mediaQueries.lgUp]: {
      padding: '1.125rem 2.5rem',
      fontSize: '1.25rem'
    }
  }
});
