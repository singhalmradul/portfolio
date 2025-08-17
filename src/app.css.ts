import { style } from '@vanilla-extract/css';
import { themeContract, tokens } from './themes/theme.css';

export const errorContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: tokens.spacing.xl,
  textAlign: 'center',
  backgroundColor: themeContract.color.background,
});

export const errorTitle = style({
  fontSize: tokens.font.size.xxlarge,
  fontWeight: tokens.font.weight.bold,
  color: themeContract.color.text.primary,
  marginBottom: tokens.spacing.md,
  fontFamily: tokens.font.family.primary,
});

export const errorMessage = style({
  fontSize: tokens.font.size.large,
  color: themeContract.color.text.secondary,
  marginBottom: tokens.spacing.lg,
  fontFamily: tokens.font.family.primary,
});

export const retryButton = style({
  padding: `${tokens.spacing.sm} ${tokens.spacing.lg}`,
  borderRadius: tokens.spacing.xs,
  border: `1px solid ${themeContract.color.border}`,
  backgroundColor: themeContract.color.surface,
  color: themeContract.color.text.primary,
  fontSize: tokens.font.size.medium,
  fontWeight: tokens.font.weight.medium,
  fontFamily: tokens.font.family.primary,
  cursor: 'pointer',
  transition: `background-color ${tokens.animation.duration.normal} ${tokens.animation.easing.easeOut}`,

  ':hover': {
    backgroundColor: themeContract.color.primary,
    color: themeContract.color.text.inverse,
  },
});
