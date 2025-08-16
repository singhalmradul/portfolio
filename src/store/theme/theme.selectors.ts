import { createSelector } from 'reselect';
import type { RootState } from '../store';

// Base selector for theme state
const selectThemeState = ({ theme }: RootState) => theme;

// Memoized selectors using Reselect
export const selectTheme = createSelector(
  [selectThemeState],
  ({ currentTheme }) => currentTheme
);

export const selectIsSystemTheme = createSelector(
  [selectThemeState],
  ({ isSystemTheme }) => isSystemTheme
);

// Export the base selector as well
export { selectThemeState };

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
