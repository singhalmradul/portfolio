import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const projectsSection = style({
  padding: '5rem 1.5rem',
  backgroundColor: theme.color.surface,
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

export const projectsTitle = style({
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
  backgroundColor: theme.color.background,
  borderRadius: '1rem',
  boxShadow: `0 4px 6px -1px ${theme.color.shadow}`,
  border: `1px solid ${theme.color.border}`,
  transition: 'all 0.2s',
  ':hover': {
    boxShadow: `0 10px 15px -3px ${theme.color.shadow}`,
    transform: 'translateY(-2px)'
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
