import { useTheme } from '../../store/theme/use-theme';
import { themeToggle, themeIcon, themeText } from './theme-toggle-button.css';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <span className={themeIcon}>
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
      <span className={themeText}>{theme === 'light' ? 'Dark' : 'Light'}</span>
    </button>
  );
};

export default ThemeToggleButton;
