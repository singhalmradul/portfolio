import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const footer = style({
  padding: '1.5rem',
  textAlign: 'center',
  color: theme.color.text.secondary,
  borderTop: `1px solid ${theme.color.border}`,
  backgroundColor: theme.color.background,
  '@media': {
    [mediaQueries.xs]: {
      padding: '1rem',
      fontSize: '0.9rem'
    },
    [mediaQueries.lgUp]: {
      padding: '2rem'
    }
  }
});
