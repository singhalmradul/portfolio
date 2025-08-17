import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const experienceSection = style({
  padding: '5rem 1.5rem',
  backgroundColor: theme.color.surface,
  position: 'relative',
  background: `
    ${theme.color.surface},
    linear-gradient(135deg, ${theme.color.background}40 0%, transparent 50%),
    radial-gradient(circle at 15% 85%, ${theme.color.primary}03 0%, transparent 50%),
    radial-gradient(circle at 85% 15%, ${theme.color.accent}04 0%, transparent 50%)
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

export const experienceTitle = style({
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

export const experienceContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  maxWidth: '64rem',
  margin: '0 auto',
  '@media': {
    [mediaQueries.xs]: {
      gap: '1.5rem'
    }
  }
});

export const experienceCard = style({
  padding: '2rem',
  backgroundColor: theme.color.background,
  borderRadius: theme.borderRadius.large,
  boxShadow: theme.shadow.md,
  border: `1px solid ${theme.color.border}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  ':hover': {
    boxShadow: theme.shadow.xl,
    transform: 'translateY(-4px)',
    borderColor: theme.color.primary,
  },
  '::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    background: `linear-gradient(180deg, ${theme.color.primary}, ${theme.color.accent})`,
    borderRadius: `${theme.borderRadius.large} 0 0 ${theme.borderRadius.large}`,
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '1.5rem'
    },
    [mediaQueries.lgUp]: {
      padding: '2.5rem'
    }
  }
});

export const experienceJobTitle = style({
  fontSize: '1.25rem',
  fontWeight: '600',
  color: theme.color.text.primary,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '1.1rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '1.375rem'
    }
  }
});

export const experienceDuration = style({
  color: theme.color.text.secondary,
  marginTop: '0.25rem',
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.9rem'
    }
  }
});

export const experienceList = style({
  listStyle: 'disc',
  paddingLeft: '1.25rem',
  marginTop: '0.75rem',
  color: theme.color.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.95rem',
      paddingLeft: '1rem'
    }
  }
});
