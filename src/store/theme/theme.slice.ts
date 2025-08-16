import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark';

export interface ThemeState {
  currentTheme: Theme;
  isSystemTheme: boolean;
}

const initialState: ThemeState = {
  currentTheme: 'light', // Default to light, will be set by saga
  isSystemTheme: true, // Default to system theme
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Pure state updates - no business logic
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
      state.isSystemTheme = false;
    },
    setSystemTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
    },
    setIsSystemTheme: (state, action: PayloadAction<boolean>) => {
      state.isSystemTheme = action.payload;
    },
    // Internal reducer for setting theme state from saga
    _setThemeState: (state, action: PayloadAction<{ theme: Theme; isSystemTheme: boolean }>) => {
      state.currentTheme = action.payload.theme;
      state.isSystemTheme = action.payload.isSystemTheme;
    },

    // Action creators for saga (no reducers, handled by saga)
    requestThemeToggle: () => {
      // This will be handled by saga
    },
    requestSystemThemeEnable: () => {
      // This will be handled by saga
    },
    initializeTheme: () => {
      // This will be handled by saga
    },
    persistTheme: () => {
      // This will be handled by saga
    },
  },
});

export const {
  setTheme,
  setSystemTheme,
  setIsSystemTheme,
  _setThemeState,
  requestThemeToggle,
  requestSystemThemeEnable,
  initializeTheme,
  persistTheme,
} = themeSlice.actions;

export default themeSlice.reducer;
