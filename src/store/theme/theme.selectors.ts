import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Base selector for theme state
export const selectThemeState = ({ theme }: RootState) => theme;

// Memoized selectors
export const selectTheme = createSelector(
  [selectThemeState],
  ({ currentTheme }) => currentTheme
);

export const selectIsSystemTheme = createSelector(
  [selectThemeState],
  ({ isSystemTheme }) => isSystemTheme
);

// Additional derived selectors
export const selectIsDarkTheme = createSelector(
  [selectTheme],
  (theme) => theme === 'dark'
);

export const selectIsLightTheme = createSelector(
  [selectTheme],
  (theme) => theme === 'light'
);

export const selectThemeInfo = createSelector(
  [selectTheme, selectIsSystemTheme],
  (currentTheme, isSystemTheme) => ({
    currentTheme,
    isSystemTheme,
    isDark: currentTheme === 'dark',
    isLight: currentTheme === 'light',
  })
);
