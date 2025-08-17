import ThemeToggleButton from '../theme-toggle-button/theme-toggle-button.component';
import NavigationLink from './navigation-link/navigation-link.component';
import { portfolioNav, navContainer, navLinks, themeToggleContainer, logoContainer, logo } from './main-navigation.css';

const MainNavigation = () => {
  const navigationItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={portfolioNav}>
      <div className={navContainer}>
        <div className={logoContainer}>
          <img
            src="/singhalmradul.svg"
            alt="Mradul Singhal Logo"
            className={logo}
          />
        </div>
        <div className={navLinks}>
          {navigationItems.map((item) => (
            <NavigationLink key={item.href} href={item.href}>
              {item.label}
            </NavigationLink>
          ))}
        </div>
        <div className={themeToggleContainer}>
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
