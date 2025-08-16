import { style, styleVariants } from '@vanilla-extract/css';
import { mediaQueries } from './media';

// Container utilities for consistent max-widths and padding
export const container = style({
  width: '100%',
  maxWidth: '80rem',
  margin: '0 auto',
  padding: '0 1.5rem',
  '@media': {
    [mediaQueries.xs]: {
      padding: '0 1rem'
    },
    [mediaQueries.xlUp]: {
      padding: '0 2rem'
    }
  }
});

export const containerNarrow = style({
  width: '100%',
  maxWidth: '48rem',
  margin: '0 auto',
  padding: '0 1.5rem',
  '@media': {
    [mediaQueries.xs]: {
      padding: '0 1rem'
    }
  }
});

// Responsive spacing utilities
export const spacing = styleVariants({
  xs: {
    '@media': {
      [mediaQueries.xs]: { margin: '0.5rem' },
      [mediaQueries.smUp]: { margin: '0.75rem' },
      [mediaQueries.lgUp]: { margin: '1rem' }
    }
  },
  sm: {
    '@media': {
      [mediaQueries.xs]: { margin: '1rem' },
      [mediaQueries.smUp]: { margin: '1.5rem' },
      [mediaQueries.lgUp]: { margin: '2rem' }
    }
  },
  md: {
    '@media': {
      [mediaQueries.xs]: { margin: '1.5rem' },
      [mediaQueries.smUp]: { margin: '2.5rem' },
      [mediaQueries.lgUp]: { margin: '3rem' }
    }
  },
  lg: {
    '@media': {
      [mediaQueries.xs]: { margin: '2rem' },
      [mediaQueries.smUp]: { margin: '3rem' },
      [mediaQueries.lgUp]: { margin: '4rem' }
    }
  },
  xl: {
    '@media': {
      [mediaQueries.xs]: { margin: '3rem' },
      [mediaQueries.smUp]: { margin: '4rem' },
      [mediaQueries.lgUp]: { margin: '5rem' }
    }
  }
});

// Responsive padding utilities
export const padding = styleVariants({
  xs: {
    '@media': {
      [mediaQueries.xs]: { padding: '0.5rem' },
      [mediaQueries.smUp]: { padding: '0.75rem' },
      [mediaQueries.lgUp]: { padding: '1rem' }
    }
  },
  sm: {
    '@media': {
      [mediaQueries.xs]: { padding: '1rem' },
      [mediaQueries.smUp]: { padding: '1.5rem' },
      [mediaQueries.lgUp]: { padding: '2rem' }
    }
  },
  md: {
    '@media': {
      [mediaQueries.xs]: { padding: '1.5rem' },
      [mediaQueries.smUp]: { padding: '2.5rem' },
      [mediaQueries.lgUp]: { padding: '3rem' }
    }
  },
  lg: {
    '@media': {
      [mediaQueries.xs]: { padding: '2rem' },
      [mediaQueries.smUp]: { padding: '3rem' },
      [mediaQueries.lgUp]: { padding: '4rem' }
    }
  },
  xl: {
    '@media': {
      [mediaQueries.xs]: { padding: '3rem 1rem' },
      [mediaQueries.smUp]: { padding: '4rem 1.25rem' },
      [mediaQueries.lgUp]: { padding: '5rem 1.5rem' }
    }
  }
});

// Responsive text utilities
export const text = styleVariants({
  xs: {
    '@media': {
      [mediaQueries.xs]: { fontSize: '0.75rem' },
      [mediaQueries.smUp]: { fontSize: '0.875rem' },
      [mediaQueries.lgUp]: { fontSize: '1rem' }
    }
  },
  sm: {
    '@media': {
      [mediaQueries.xs]: { fontSize: '0.875rem' },
      [mediaQueries.smUp]: { fontSize: '1rem' },
      [mediaQueries.lgUp]: { fontSize: '1.125rem' }
    }
  },
  base: {
    '@media': {
      [mediaQueries.xs]: { fontSize: '1rem' },
      [mediaQueries.smUp]: { fontSize: '1.125rem' },
      [mediaQueries.lgUp]: { fontSize: '1.25rem' }
    }
  },
  lg: {
    '@media': {
      [mediaQueries.xs]: { fontSize: '1.125rem' },
      [mediaQueries.smUp]: { fontSize: '1.25rem' },
      [mediaQueries.lgUp]: { fontSize: '1.375rem' }
    }
  },
  xl: {
    '@media': {
      [mediaQueries.xs]: { fontSize: '1.25rem' },
      [mediaQueries.smUp]: { fontSize: '1.5rem' },
      [mediaQueries.lgUp]: { fontSize: '1.75rem' }
    }
  },
  '2xl': {
    '@media': {
      [mediaQueries.xs]: { fontSize: '1.5rem' },
      [mediaQueries.smUp]: { fontSize: '1.875rem' },
      [mediaQueries.lgUp]: { fontSize: '2.25rem' }
    }
  },
  '3xl': {
    '@media': {
      [mediaQueries.xs]: { fontSize: '1.875rem' },
      [mediaQueries.smUp]: { fontSize: '2.25rem' },
      [mediaQueries.lgUp]: { fontSize: '3rem' }
    }
  }
});

// Responsive grid utilities
export const grid = styleVariants({
  auto: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: '1fr',
    '@media': {
      [mediaQueries.mdUp]: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
      }
    }
  },
  two: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: '1fr',
    '@media': {
      [mediaQueries.mdUp]: {
        gridTemplateColumns: 'repeat(2, 1fr)'
      }
    }
  },
  three: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: '1fr',
    '@media': {
      [mediaQueries.mdUp]: {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      [mediaQueries.lgUp]: {
        gridTemplateColumns: 'repeat(3, 1fr)'
      }
    }
  }
});

// Responsive flexbox utilities
export const flex = styleVariants({
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    '@media': {
      [mediaQueries.mdUp]: {
        flexDirection: 'row'
      }
    }
  },
  columnReverse: {
    display: 'flex',
    flexDirection: 'column-reverse',
    gap: '1rem',
    '@media': {
      [mediaQueries.mdUp]: {
        flexDirection: 'row'
      }
    }
  },
  wrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    '@media': {
      [mediaQueries.mdUp]: {
        justifyContent: 'flex-start'
      }
    }
  }
});

// Responsive visibility utilities
export const hide = styleVariants({
  xs: {
    '@media': {
      [mediaQueries.xs]: {
        display: 'none'
      }
    }
  },
  sm: {
    '@media': {
      [mediaQueries.sm]: {
        display: 'none'
      }
    }
  },
  md: {
    '@media': {
      [mediaQueries.md]: {
        display: 'none'
      }
    }
  }
});

export const show = styleVariants({
  xs: {
    display: 'none',
    '@media': {
      [mediaQueries.xs]: {
        display: 'block'
      }
    }
  },
  sm: {
    display: 'none',
    '@media': {
      [mediaQueries.smUp]: {
        display: 'block'
      }
    }
  },
  md: {
    display: 'none',
    '@media': {
      [mediaQueries.mdUp]: {
        display: 'block'
      }
    }
  }
});
