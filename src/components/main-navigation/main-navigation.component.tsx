import { useEffect, useRef } from 'react';
import ThemeToggleButton from '../theme-toggle-button/theme-toggle-button.component';
import NavigationLink from './navigation-link/navigation-link.component';
import { useUI } from '../../store/ui/use-ui';
import {
  portfolioNav,
  navContainer,
  desktopNavLinks,
  themeToggleContainer,
  logoContainer,
  logo,
  hamburgerButton,
  hamburgerIcon,
  hamburgerLineTop,
  hamburgerLineMiddle,
  hamburgerLineBottom,
  mobileMenu,
  mobileMenuOpen,
  mobileNavLinks,
  mobileControls
} from './main-navigation.css';

const MainNavigation = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useUI();
  const navRef = useRef<HTMLElement>(null);

  const navigationItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleMenuToggle = () => {
    toggleMenu();
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  // Close menu on escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, closeMenu]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, closeMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav ref={navRef} className={portfolioNav} data-menu-open={isMenuOpen}>
      <div className={navContainer}>
        <div className={logoContainer}>
          <img
            src="/singhalmradul.svg"
            alt="Mradul Singhal Logo"
            className={logo}
          />
        </div>

        {/* Desktop Navigation */}
        <div className={desktopNavLinks}>
          {navigationItems.map((item) => (
            <NavigationLink key={item.href} href={item.href}>
              {item.label}
            </NavigationLink>
          ))}
        </div>

        <div className={mobileControls}>
          {/* Mobile Hamburger Button */}
          <button
            className={hamburgerButton}
            onClick={handleMenuToggle}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <div className={hamburgerIcon}>
              <div className={hamburgerLineTop}></div>
              <div className={hamburgerLineMiddle}></div>
              <div className={hamburgerLineBottom}></div>
            </div>
          </button>

          <div className={themeToggleContainer}>
            <ThemeToggleButton />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenu} ${isMenuOpen ? mobileMenuOpen : ''}`}>
        <div className={mobileNavLinks}>
          {navigationItems.map((item) => (
            <NavigationLink key={item.href} href={item.href} onClick={handleLinkClick} variant="mobile">
              {item.label}
            </NavigationLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
