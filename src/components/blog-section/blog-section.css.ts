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
  gap: '2rem',
  gridTemplateColumns: '1fr',
  '@media': {
    [mediaQueries.mdUp]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [mediaQueries.xlUp]: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  }
});

export const blogPostCard = style({
  backgroundColor: theme.color.surface,
  borderRadius: '0.75rem',
  padding: '1.5rem',
  border: `1px solid ${theme.color.border}`,
  transition: 'all 0.2s',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    borderColor: theme.color.primary
  }
});

export const blogPostMeta = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
  '@media': {
    [mediaQueries.xs]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.5rem'
    }
  }
});

export const blogPostDate = style({
  color: theme.color.text.secondary,
  fontSize: '0.875rem'
});

export const blogPostCategory = style({
  backgroundColor: theme.color.primary,
  color: theme.color.text.inverse,
  padding: '0.25rem 0.75rem',
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: '500'
});

export const blogPostTitle = style({
  fontSize: '1.25rem',
  fontWeight: '600',
  marginBottom: '0.75rem',
  color: theme.color.text.primary,
  lineHeight: 1.3,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '1.125rem'
    }
  }
});

export const blogPostDescription = style({
  color: theme.color.text.secondary,
  marginBottom: '1rem',
  lineHeight: 1.6,
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.95rem'
    }
  }
});

export const blogPostFooter = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media': {
    [mediaQueries.xs]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.75rem'
    }
  }
});

export const blogPostTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  '@media': {
    [mediaQueries.xs]: {
      gap: '0.375rem'
    }
  }
});

export const blogPostTag = style({
  backgroundColor: theme.color.surface,
  color: theme.color.text.secondary,
  padding: '0.25rem 0.5rem',
  borderRadius: '0.25rem',
  fontSize: '0.75rem',
  fontWeight: '500'
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
