import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const contactSection = style({
  padding: '5rem 1.5rem',
  textAlign: 'center',
  backgroundColor: theme.color.surface,
  position: 'relative',
  background: `
    linear-gradient(135deg, ${theme.color.surface} 0%, ${theme.color.background} 100%),
    radial-gradient(circle at 30% 30%, ${theme.color.primary}05 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, ${theme.color.accent}04 0%, transparent 50%)
  `,
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${theme.color.primary}40, ${theme.color.accent}30, transparent)`,
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
  padding: '1rem 2rem',
  background: `linear-gradient(135deg, ${theme.color.primary} 0%, ${theme.color.secondary} 50%, ${theme.color.accent} 100%)`,
  color: theme.color.text.inverse,
  borderRadius: '1.25rem',
  boxShadow: `0 8px 15px -3px ${theme.color.shadow}, 0 4px 6px -2px ${theme.color.shadow}, 0 0 0 1px ${theme.color.primary}20`,
  textDecoration: 'none',
  transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
  minWidth: 'fit-content',
  display: 'inline-block',
  position: 'relative',
  overflow: 'hidden',
  fontWeight: theme.font.weight.semibold,
  backdropFilter: 'blur(10px)',
  fontSize: '1rem',
  ':hover': {
    boxShadow: `0 20px 35px -5px ${theme.color.shadow}, 0 8px 15px -3px ${theme.color.shadow}, 0 0 0 1px ${theme.color.primary}60`,
    transform: 'translateY(-5px) scale(1.05)',
  },
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: `linear-gradient(135deg, ${theme.color.secondary}, ${theme.color.accent})`,
    transition: 'left 0.3s ease',
    zIndex: -1,
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
  border: `2px solid ${theme.color.primary}`,
  color: theme.color.primary,
  backgroundColor: 'transparent',
  borderRadius: '1rem',
  textDecoration: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  minWidth: 'fit-content',
  display: 'inline-block',
  position: 'relative',
  overflow: 'hidden',
  fontWeight: theme.font.weight.medium,
  ':hover': {
    background: `linear-gradient(135deg, ${theme.color.primary}, ${theme.color.secondary})`,
    color: theme.color.text.inverse,
    transform: 'translateY(-3px) scale(1.02)',
    borderColor: theme.color.secondary,
    boxShadow: `0 8px 20px -5px ${theme.color.shadow}`,
  },
  '::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 0,
    height: 0,
    background: `radial-gradient(circle, ${theme.color.primary}10 0%, transparent 70%)`,
    transition: 'all 0.3s ease',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
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
