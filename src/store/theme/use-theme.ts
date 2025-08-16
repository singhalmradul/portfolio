import { setTheme, requestThemeToggle, requestSystemThemeEnable, initializeTheme } from './theme.slice';
import { selectTheme, selectIsSystemTheme } from './theme.selectors';
import type { Theme } from './theme.slice';
import { useDispatch, useSelector } from 'react-redux';

export const useTheme = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);
  const isSystemTheme = useSelector(selectIsSystemTheme);

  const handleSetTheme = (theme: Theme) => {
    dispatch(setTheme(theme));
  };

  const handleToggleTheme = () => {
    dispatch(requestThemeToggle());
  };

  const handleEnableSystemTheme = () => {
    dispatch(requestSystemThemeEnable());
  };

  const handleInitializeTheme = () => {
    dispatch(initializeTheme());
  };

  return {
    theme: currentTheme,
    isSystemTheme,
    setTheme: handleSetTheme,
    toggleTheme: handleToggleTheme,
    enableSystemTheme: handleEnableSystemTheme,
    initializeTheme: handleInitializeTheme,
  };
};
