import ThemeToggleButton from '../theme-toggle-button/theme-toggle-button.component';
import { portfolioNav, navContainer, navLinks, navLink, themeToggleContainer } from './main-navigation.css';

const MainNavigation = () => {
  return (
    <nav className={portfolioNav}>
      <div className={navContainer}>
        <div className={navLinks}>
          <a href="#about" className={navLink}>About</a>
          <a href="#experience" className={navLink}>Experience</a>
          <a href="#projects" className={navLink}>Projects</a>
          <a href="#skills" className={navLink}>Skills</a>
          <a href="#blog" className={navLink}>Blog</a>
          <a href="#contact" className={navLink}>Contact</a>
        </div>
        <div className={themeToggleContainer}>
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
