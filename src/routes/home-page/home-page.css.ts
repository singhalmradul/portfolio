import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const homeContainer = style({
  padding: theme.spacing.xl,
  maxWidth: '1200px',
  margin: '0 auto',

  '@media': {
    [mediaQueries.below.tablet]: {
      padding: theme.spacing.md,
    },
  },
});

export const homeTitle = style({
  fontSize: theme.font.size.xlarge,
  fontWeight: theme.font.weight.bold,
  color: theme.color.text.primary,
  marginBottom: theme.spacing.lg,
  textAlign: 'center',

  '@media': {
    [mediaQueries.below.tablet]: {
      fontSize: theme.font.size.large,
      marginBottom: theme.spacing.md,
    },
  },
});

export const homeParagraph = style({
  fontSize: theme.font.size.medium,
  color: theme.color.text.secondary,
  lineHeight: 1.6,
  marginBottom: theme.spacing.md,
  textAlign: 'center',

  '@media': {
    [mediaQueries.below.tablet]: {
      fontSize: theme.font.size.small,
      marginBottom: theme.spacing.sm,
      textAlign: 'left',
    },
  },
});

export const featureCard = style({
  backgroundColor: theme.color.surface,
  padding: theme.spacing.lg,
  borderRadius: theme.borderRadius.large,
  border: `1px solid ${theme.color.border}`,
  boxShadow: `0 2px 8px ${theme.color.shadow}`,
  marginTop: theme.spacing.xl,
  textAlign: 'center',

  '@media': {
    [mediaQueries.below.tablet]: {
      padding: theme.spacing.md,
      marginTop: theme.spacing.lg,
      textAlign: 'left',
    },
  },
});

export const featureTitle = style({
  fontSize: theme.font.size.large,
  fontWeight: theme.font.weight.medium,
  color: theme.color.primary,
  marginBottom: theme.spacing.md,

  '@media': {
    [mediaQueries.below.tablet]: {
      fontSize: theme.font.size.medium,
      marginBottom: theme.spacing.sm,
    },
  },
});

export const featureDescription = style({
  color: theme.color.text.secondary,
  lineHeight: 1.5,

  '@media': {
    [mediaQueries.below.tablet]: {
      fontSize: theme.font.size.small,
    },
  },
});
