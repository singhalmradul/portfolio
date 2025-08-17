import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const blogSection = style({
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

export const blogTitle = style({
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

export const blogContainer = style({
  maxWidth: '64rem',
  margin: '0 auto'
});

export const blogPlaceholder = style({
  backgroundColor: theme.color.background,
  padding: '3rem',
  borderRadius: '1rem',
  boxShadow: `0 4px 6px -1px ${theme.color.shadow}`,
  border: `1px solid ${theme.color.border}`,
  textAlign: 'center',
  '@media': {
    [mediaQueries.xs]: {
      padding: '1.5rem'
    },
    [mediaQueries.sm]: {
      padding: '2rem'
    },
    [mediaQueries.lgUp]: {
      padding: '3.5rem'
    }
  }
});

export const blogPlaceholderTitle = style({
  fontSize: '1.5rem',
  fontWeight: '600',
  marginBottom: '1rem',
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

export const blogPlaceholderText = style({
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

export const blogPlaceholderList = style({
  textAlign: 'left',
  display: 'inline-block',
  color: theme.color.text.secondary,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.9rem'
    }
  }
});

export const blogPlaceholderListItem = style({
  marginBottom: '0.5rem'
});

export const blogPlaceholderFooter = style({
  marginTop: '1.5rem',
  fontStyle: 'italic',
  color: theme.color.text.secondary,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.9rem'
    }
  }
});

// Blog posts grid and cards
export const blogPostsGrid = style({
  display: 'grid',
  gap: '2.5rem',
  gridTemplateColumns: '1fr',
  '@media': {
    [mediaQueries.xs]: {
      gap: '1.5rem'
    },
    [mediaQueries.sm]: {
      gap: '2rem'
    },
    [mediaQueries.mdUp]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [mediaQueries.xlUp]: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  }
});

export const blogPostCard = style({
  backgroundColor: theme.color.background,
  borderRadius: theme.borderRadius.large,
  padding: '2rem',
  border: `1px solid ${theme.color.border}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  textDecoration: 'none !important',
  color: 'inherit',
  display: 'block',
  boxShadow: theme.shadow.sm,
  height: 'fit-content',
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadow.lg,
    borderColor: theme.color.primary,
    textDecoration: 'none !important',
  },
  selectors: {
    '&:hover': {
      textDecoration: 'none !important',
    }
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '1.5rem'
    },
    [mediaQueries.sm]: {
      padding: '1.75rem'
    }
  }
});

export const blogPostMeta = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1.5rem',
  gap: '1rem',
  '@media': {
    [mediaQueries.xs]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.75rem',
      marginBottom: '1.25rem'
    }
  }
});

export const blogPostDate = style({
  color: theme.color.text.secondary,
  fontSize: '0.875rem',
  fontWeight: '400',
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.8rem'
    }
  }
});

export const blogPostCategory = style({
  backgroundColor: theme.color.primary,
  color: theme.color.text.inverse,
  padding: '0.375rem 1rem',
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: '500',
  whiteSpace: 'nowrap',
  '@media': {
    [mediaQueries.xs]: {
      padding: '0.25rem 0.75rem'
    }
  }
});

export const blogPostTitle = style({
  fontSize: '1.25rem',
  fontWeight: '600',
  marginBottom: '1rem',
  color: theme.color.text.primary,
  lineHeight: 1.4,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '1.125rem',
      marginBottom: '0.875rem'
    }
  }
});

export const blogPostDescription = style({
  color: theme.color.text.secondary,
  marginBottom: '1.5rem',
  lineHeight: 1.6,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.95rem',
      marginBottom: '1.25rem'
    }
  }
});

export const blogPostFooter = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  gap: '1rem',
  marginTop: 'auto',
  '@media': {
    [mediaQueries.xs]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1rem'
    }
  }
});

export const blogPostTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.625rem',
  '@media': {
    [mediaQueries.xs]: {
      gap: '0.5rem'
    }
  }
});

export const blogPostTag = style({
  backgroundColor: theme.color.surface,
  color: theme.color.text.secondary,
  padding: '0.375rem 0.75rem',
  borderRadius: '0.375rem',
  fontSize: '0.75rem',
  fontWeight: '500',
  border: `1px solid ${theme.color.border}`,
  '@media': {
    [mediaQueries.xs]: {
      padding: '0.25rem 0.5rem'
    }
  }
});

export const blogPostReadTime = style({
  color: theme.color.text.secondary,
  fontSize: '0.875rem',
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.8rem'
    }
  }
});

export const blogToggleButton = style({
  backgroundColor: theme.color.primary,
  color: theme.color.text.inverse,
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.2s',
  marginTop: '1.5rem',
  ':hover': {
    backgroundColor: theme.color.accent,
    transform: 'translateY(-1px)'
  }
});

export const blogToggleContainer = style({
  textAlign: 'center'
});

export const blogExternalLink = style({
  backgroundColor: theme.color.primary,
  color: theme.color.text.inverse,
  padding: '0.75rem 1.5rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: '500',
  textDecoration: 'none',
  display: 'inline-block',
  transition: 'all 0.2s',
  marginTop: '1.5rem',
  ':hover': {
    backgroundColor: theme.color.accent,
    transform: 'translateY(-1px)'
  }
});
