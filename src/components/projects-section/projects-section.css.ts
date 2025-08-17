import { style } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const projectsSection = style({
  padding: '6rem 1.5rem',
  backgroundColor: theme.color.surface,
  position: 'relative',
  background: `
    ${theme.color.surface},
    radial-gradient(circle at 20% 20%, ${theme.color.primary}08 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, ${theme.color.accent}06 0%, transparent 50%)
  `,
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${theme.color.primary}40, ${theme.color.accent}40, transparent)`,
  },
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${theme.color.border}, transparent)`,
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

export const projectsTitle = style({
  fontSize: '2.5rem',
  fontWeight: theme.font.weight.bold,
  marginBottom: '3rem',
  textAlign: 'center',
  color: theme.color.text.primary,
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '-1rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '4px',
    background: `linear-gradient(90deg, ${theme.color.primary}, ${theme.color.accent})`,
    borderRadius: theme.borderRadius.full,
    boxShadow: `0 0 20px ${theme.color.primary}40`,
  },
  '::before': {
    content: '""',
    position: 'absolute',
    bottom: '-0.75rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '6px',
    background: `linear-gradient(90deg, ${theme.color.primary}20, ${theme.color.accent}20)`,
    borderRadius: theme.borderRadius.full,
    filter: 'blur(2px)',
  },
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '2rem',
      marginBottom: '2rem'
    },
    [mediaQueries.smUp]: {
      fontSize: '2.25rem',
      marginBottom: '2.5rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '2.75rem',
      marginBottom: '3.5rem'
    }
  }
});

export const projectsGrid = style({
  maxWidth: '80rem',
  margin: '0 auto',
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: '1fr',
  '@media': {
    [mediaQueries.xs]: {
      gap: '1.5rem'
    },
    [mediaQueries.mdUp]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [mediaQueries.xlUp]: {
      gap: '2.5rem'
    }
  }
});

export const projectCard = style({
  padding: '1.5rem',
  backgroundColor: theme.color.surfaceElevated,
  borderRadius: '1.25rem',
  boxShadow: `0 4px 6px -1px ${theme.color.shadow}, 0 2px 4px -1px ${theme.color.shadow}`,
  border: `1px solid ${theme.color.border}`,
  transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
  position: 'relative',
  overflow: 'hidden',
  backdropFilter: 'blur(10px)',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: `linear-gradient(90deg, ${theme.color.primary}, ${theme.color.accent})`,
    opacity: 0,
    transition: `opacity ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
  },
  ':hover': {
    boxShadow: `0 20px 25px -5px ${theme.color.shadow}, 0 10px 10px -5px ${theme.color.shadow}, 0 0 0 1px ${theme.color.primary}20`,
    transform: 'translateY(-8px) scale(1.02)',
    borderColor: theme.color.primary,
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '1.25rem'
    },
    [mediaQueries.lgUp]: {
      padding: '2rem'
    }
  }
});

// Global styles for project card hover effects
globalStyle(`${projectCard}:hover::before`, {
  opacity: 1,
});

export const projectTitle = style({
  fontSize: '1.5rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
  color: theme.color.text.primary,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '1.25rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '1.6rem'
    }
  }
});

export const projectDescription = style({
  color: theme.color.text.secondary,
  marginBottom: '1rem',
  lineHeight: 1.6,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.95rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '1.05rem'
    }
  }
});

export const projectLongDescription = style({
  color: theme.color.text.secondary,
  marginBottom: '1.5rem',
  fontSize: '0.95rem',
  lineHeight: 1.6,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.9rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '1rem'
    }
  }
});

export const projectTech = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '1.5rem',
  '@media': {
    [mediaQueries.xs]: {
      gap: '0.375rem'
    }
  }
});

export const projectTechItem = style({
  backgroundColor: theme.color.surface,
  color: theme.color.text.secondary,
  padding: '0.25rem 0.75rem',
  borderRadius: '9999px',
  fontSize: '0.875rem',
  fontWeight: '500',
  border: `1px solid ${theme.color.border}`,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.8rem',
      padding: '0.2rem 0.6rem'
    }
  }
});

export const projectFeatures = style({
  marginBottom: '1.5rem'
});

export const projectFeaturesTitle = style({
  fontSize: '1rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
  color: theme.color.text.primary,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.95rem'
    }
  }
});

export const projectFeaturesList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0
});

export const projectFeatureItem = style({
  padding: '0.25rem 0',
  color: theme.color.text.secondary,
  fontSize: '0.9rem',
  position: 'relative',
  paddingLeft: '1rem',
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.85rem'
    }
  }
});

export const projectFeatureBullet = style({
  position: 'absolute',
  left: 0,
  color: theme.color.primary,
  fontWeight: 'bold'
});

export const projectLinks = style({
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  '@media': {
    [mediaQueries.xs]: {
      gap: '0.75rem',
      flexDirection: 'column'
    },
    [mediaQueries.smUp]: {
      flexDirection: 'row'
    }
  }
});

export const projectLink = style({
  color: theme.color.primary,
  fontWeight: '500',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  },
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.95rem'
    }
  }
});

export const projectGithubLink = style({
  color: theme.color.text.secondary,
  fontWeight: '500',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
    color: theme.color.text.primary
  },
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.95rem'
    }
  }
});
