import { style, keyframes } from '@vanilla-extract/css';
import { themeContract, tokens } from '../../../themes/theme.css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinnerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  gap: tokens.spacing.lg,
  backgroundColor: themeContract.color.background,
});

export const spinner = style({
  width: '3rem',
  height: '3rem',
  border: `4px solid ${themeContract.color.border}`,
  borderTop: `4px solid ${themeContract.color.primary}`,
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,
});

export const spinnerText = style({
  fontSize: tokens.font.size.large,
  fontWeight: tokens.font.weight.medium,
  color: themeContract.color.text.secondary,
  margin: 0,
  fontFamily: tokens.font.family.primary,
});
