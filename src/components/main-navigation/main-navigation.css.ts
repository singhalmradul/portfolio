import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const portfolioNav = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: `${theme.color.background}90`,
  backdropFilter: 'blur(25px) saturate(180%)',
  borderBottom: `1px solid ${theme.color.borderLight}`,
  zIndex: 1000,
  padding: '1rem 0',
  transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
  boxShadow: `0 4px 6px -1px ${theme.color.shadow}, 0 2px 4px -1px rgba(0, 0, 0, 0.04)`,
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      linear-gradient(90deg, transparent 0%, ${theme.color.primary}06 25%, ${theme.color.accent}04 75%, transparent 100%),
      linear-gradient(180deg, ${theme.color.glass} 0%, transparent 100%)
    `,
    pointerEvents: 'none',
  },
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '50%',
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${theme.color.primary}40, transparent)`,
    filter: 'blur(0.5px)',
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '0.75rem 0'
    }
  }
});

export const navContainer = style({
  maxWidth: '80rem',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1.5rem',
  position: 'relative',
  '@media': {
    [mediaQueries.xs]: {
      padding: '0 1rem'
    },
    [mediaQueries.sm]: {
      flexDirection: 'row', // Keep horizontal layout for mobile
      gap: '0',
    }
  }
});

export const navLinks = style({
  display: 'flex',
  gap: '2rem',
  '@media': {
    [mediaQueries.xs]: {
      gap: '0.75rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    [mediaQueries.sm]: {
      gap: '1rem',
      justifyContent: 'center'
    }
  }
});

export const navLink = style({
  color: theme.color.text.secondary,
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.2s',
  whiteSpace: 'nowrap',
  ':hover': {
    color: theme.color.primary
  },
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '0.8rem'
    },
    [mediaQueries.sm]: {
      fontSize: '0.875rem'
    }
  }
});

// Enhanced mobile navigation link style for better contrast in mobile menu
export const mobileNavLink = style({
  color: theme.color.text.primary, // Use primary text color for better contrast
  textDecoration: 'none',
  fontWeight: '600', // Slightly bolder for mobile
  fontSize: '1rem',
  padding: '0.75rem 1rem',
  borderRadius: theme.borderRadius.medium,
  transition: `all ${theme.animation.duration.fast} ${theme.animation.easing.easeOut}`,
  textAlign: 'center',
  minWidth: '120px',
  position: 'relative',
  background: 'transparent',

  ':hover': {
    color: theme.color.primary,
    backgroundColor: `${theme.color.primary}10`,
    transform: 'scale(1.02)',
  },

  ':focus': {
    outline: 'none',
    color: theme.color.primary,
    backgroundColor: `${theme.color.primary}15`,
    boxShadow: `0 0 0 2px ${theme.color.primary}30`,
  },
});

export const themeToggleContainer = style({
  display: 'flex',
  alignItems: 'center',
  '@media': {
    [mediaQueries.sm]: {
      order: 1, // Place after hamburger button
    }
  }
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  '@media': {
    [mediaQueries.sm]: {
      order: -1
    }
  }
});

export const logo = style({
  height: '2rem',
  width: '2rem',
  transition: `transform ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
  ':hover': {
    transform: 'scale(1.1)',
  },
  '@media': {
    [mediaQueries.xs]: {
      height: '1.75rem',
      width: '1.75rem'
    }
  }
});

// Hamburger menu styles
export const hamburgerButton = style({
  display: 'none',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5rem',
  borderRadius: '0.375rem',
  transition: `background-color ${theme.animation.duration.fast} ${theme.animation.easing.easeOut}`,
  ':hover': {
    backgroundColor: `${theme.color.primary}10`,
  },
  ':focus': {
    outline: 'none',
    borderColor: theme.color.primary,
    boxShadow: `0 0 0 2px ${theme.color.primary}30`,
  },
  '@media': {
    [mediaQueries.xs]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      order: 0,
      minWidth: '2.5rem',
      height: '2.5rem',
      width: '2.5rem',
      borderRadius: '50%',
    },
    [mediaQueries.sm]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      order: 0,
      minWidth: '2.75rem',
      height: '2.75rem',
      width: '2.75rem',
      border: `1px solid ${theme.color.borderLight}`,
      borderRadius: theme.borderRadius.medium,
    }
  }
});

export const hamburgerIcon = style({
  width: '1.5rem',
  height: '1.5rem',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
});

export const hamburgerLine = style({
  width: '100%',
  height: '2px',
  backgroundColor: theme.color.text.primary,
  borderRadius: '1px',
  transition: `all ${theme.animation.duration.fast} ${theme.animation.easing.easeOut}`,
  transformOrigin: 'center',
});

export const hamburgerLineTop = style([
  hamburgerLine,
  {
    selectors: {
      '[data-menu-open="true"] &': {
        transform: 'rotate(45deg) translate(5px, 5px)',
      }
    }
  }
]);

export const hamburgerLineMiddle = style([
  hamburgerLine,
  {
    selectors: {
      '[data-menu-open="true"] &': {
        opacity: 0,
      }
    }
  }
]);

export const hamburgerLineBottom = style([
  hamburgerLine,
  {
    selectors: {
      '[data-menu-open="true"] &': {
        transform: 'rotate(-45deg) translate(7px, -6px)',
      }
    }
  }
]);

export const mobileMenu = style({
  display: 'none',
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: theme.color.background,
  backdropFilter: 'blur(25px) saturate(180%)',
  borderBottom: `1px solid ${theme.color.borderLight}`,
  borderTop: `1px solid ${theme.color.borderLight}`,
  boxShadow: `0 4px 6px -1px ${theme.color.shadow}, 0 2px 4px -1px rgba(0, 0, 0, 0.04)`,
  padding: '1rem 0',
  transform: 'translateY(-100%)',
  opacity: 0,
  visibility: 'hidden',
  transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
  zIndex: 999,

  // Add a subtle overlay for better contrast
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(180deg, ${theme.color.surface}20, transparent 50%, ${theme.color.surface}10)`,
    pointerEvents: 'none',
  },

  '@media': {
    [mediaQueries.sm]: {
      display: 'block',
    }
  }
});

export const mobileMenuOpen = style({
  transform: 'translateY(0)',
  opacity: 1,
  visibility: 'visible',
});

export const mobileNavLinks = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '0 1.5rem',
  alignItems: 'center',
  position: 'relative',
  zIndex: 1, // Ensure links are above the overlay
});

export const desktopNavLinks = style([
  navLinks,
  {
    '@media': {
      [mediaQueries.sm]: {
        display: 'none',
      }
    }
  }
]);

export const mobileControls = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  '@media': {
    [mediaQueries.sm]: {
      gap: '0.25rem', // Tighter spacing on mobile
    }
  }
});
