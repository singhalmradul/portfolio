import { useEffect } from 'react';
import { useTheme } from '../../store/theme/use-theme';

const ThemeInitializer = () => {
  const { initializeTheme } = useTheme();

  useEffect(() => {
    // Initialize theme on component mount
    initializeTheme();
  }, [initializeTheme]);

  return null; // This component doesn't render anything
};

export default ThemeInitializer;
