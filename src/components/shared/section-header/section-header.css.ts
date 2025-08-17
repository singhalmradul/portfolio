import { style } from '@vanilla-extract/css';
import { theme } from '../../../themes/theme.css';
import { mediaQueries } from '../../../themes/media';

export const sectionHeader = style({
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '3rem',
  textAlign: 'center',
  color: theme.color.text.primary,
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '-1rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '4px',
    background: `linear-gradient(90deg, ${theme.color.primary}, ${theme.color.accent})`,
    borderRadius: theme.borderRadius.full,
  },
  '@media': {
    [mediaQueries.xs]: {
      fontSize: '2rem',
      marginBottom: '2rem'
    },
    [mediaQueries.smUp]: {
      fontSize: '2.25rem',
      marginBottom: '2.5rem'
    },
    [mediaQueries.lgUp]: {
      fontSize: '2.75rem',
      marginBottom: '3.5rem'
    }
  }
});
