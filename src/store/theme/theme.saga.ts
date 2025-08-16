import { call, takeEvery, select, fork, put } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  setTheme,
  setSystemTheme,
  _setThemeState,
  requestThemeToggle,
  requestSystemThemeEnable,
  initializeTheme
} from './theme.slice';
import type { RootState } from '../store';
import type { Theme } from './theme.slice';

// Helper functions for business logic
function applyThemeToDocument(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function saveThemeToStorage(theme: Theme) {
  localStorage.setItem('theme', theme);
}

function removeThemeFromStorage() {
  localStorage.removeItem('theme');
}

function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem('theme') as Theme;
  return stored && (stored === 'light' || stored === 'dark') ? stored : null;
}

function getSystemTheme(): Theme {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function* handleThemeChange(action: PayloadAction<Theme>) {
  try {
    const theme = action.payload;

    // Apply theme to document
    yield call(applyThemeToDocument, theme);

    // Save to localStorage (since this is a manual theme selection)
    yield call(saveThemeToStorage, theme);
  } catch (error) {
    console.error('Error applying theme:', error);
  }
}

function* handleThemeToggle() {
  try {
    // Get current theme from state
    const currentTheme: Theme = yield select((state: RootState) => state.theme.currentTheme);
    const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';

    // Update state
    yield put(setTheme(newTheme));

    // Apply theme to document
    yield call(applyThemeToDocument, newTheme);

    // Save to localStorage
    yield call(saveThemeToStorage, newTheme);
  } catch (error) {
    console.error('Error toggling theme:', error);
  }
}

function* handleSystemThemeEnable() {
  try {
    // Get system preference
    const systemTheme: Theme = yield call(getSystemTheme);

    // Update state to use system theme
    yield put(_setThemeState({ theme: systemTheme, isSystemTheme: true }));

    // Apply theme to document
    yield call(applyThemeToDocument, systemTheme);

    // Remove saved theme from localStorage (to follow system)
    yield call(removeThemeFromStorage);
  } catch (error) {
    console.error('Error enabling system theme:', error);
  }
}

function* handleSystemThemeChange(action: PayloadAction<Theme>) {
  try {
    const theme = action.payload;
    const isSystemTheme: boolean = yield select((state: RootState) => state.theme.isSystemTheme);

    if (isSystemTheme) {
      yield call(applyThemeToDocument, theme);
      // Don't save system theme to localStorage - let it follow system
    }
  } catch (error) {
    console.error('Error applying system theme:', error);
  }
}

function* handleInitializeTheme() {
  try {
    // Check if user has a saved theme preference
    const storedTheme: Theme | null = yield call(getStoredTheme);

    if (storedTheme) {
      // User has a saved preference - use it
      yield put(_setThemeState({ theme: storedTheme, isSystemTheme: false }));
      yield call(applyThemeToDocument, storedTheme);
    } else {
      // No saved preference - use system theme
      const systemTheme: Theme = yield call(getSystemTheme);
      yield put(_setThemeState({ theme: systemTheme, isSystemTheme: true }));
      yield call(applyThemeToDocument, systemTheme);
    }
  } catch (error) {
    console.error('Error initializing theme:', error);
  }
}

// Watchers
function* watchSetTheme() {
  yield takeEvery(setTheme.type, handleThemeChange);
}

function* watchToggleTheme() {
  yield takeEvery(requestThemeToggle.type, handleThemeToggle);
}

function* watchSystemThemeEnable() {
  yield takeEvery(requestSystemThemeEnable.type, handleSystemThemeEnable);
}

function* watchSystemTheme() {
  yield takeEvery(setSystemTheme.type, handleSystemThemeChange);
}

function* watchInitializeTheme() {
  yield takeEvery(initializeTheme.type, handleInitializeTheme);
}

// Root saga
export default function* themeSaga() {
  yield fork(watchSetTheme);
  yield fork(watchToggleTheme);
  yield fork(watchSystemThemeEnable);
  yield fork(watchSystemTheme);
  yield fork(watchInitializeTheme);
}
